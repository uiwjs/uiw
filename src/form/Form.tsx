import React from 'react';
import classnames from 'classnames';
import FormItem, { IFormItemProps } from './FormItem';
import Input from '../input';
import { IProps } from '../utils/props';
import './style/form.less';

export interface FormProps<T> extends IProps, Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'> {
  prefixCls?: string;
  fields?: {
    [key: string]: FormFieldsProps<T>;
  };
  onSubmit?: (state: FormSubmitProps) => any;
  afterSubmit?: (result: FormAfterSubmitProps) => any;
  onChange?: (state: IFormState) => void;
  onSubmitError?: (evn: React.FormEvent) => void;
  resetOnSubmit?: boolean;
  children?: (handle: FormChildrenProps) => JSX.Element | JSX.Element | undefined;
}

export interface IFormState {
  submitting: boolean,
  initial: {
    [key: string]: any;
  },
  current: IFormState['initial'],
  errors: {
    [key: string]: any;
  },
}

export interface FormFieldsProps<T> extends IFormItemProps<T>{
  name?: string;
  children?: React.ReactNode;
  validator?: (currentValue: any) => void;
}

export interface FormSubmitProps {
  initial: IFormState['initial'];
  current: IFormState['current'];
}

export interface FormAfterSubmitProps {
  state: IFormState;
  response: any;
  reset: () => void;
}

export interface FormChildrenProps {
  fields: {
    [key: string]: React.ReactElement;
  },
  resetForm: () => void;
  canSubmit: () => boolean;
  state: IFormState;
}


export type FormElementProps = {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (env: React.BaseSyntheticEvent<HTMLInputElement>, list?: string[]) => void;
};

const isPromise = (promise: Promise<any>) => promise && typeof promise.then === 'function';
function newInitialValue<T>(value: FormFieldsProps<T>['initialValue']) {
  return ((value === null || value === undefined) ? '' : value);
}
const noop = () => undefined;
function newFormState<T>(
  fields: FormProps<T>['fields'],
  cb: (porps: FormFieldsProps<T>) => ({ initialValue: FormFieldsProps<T>['initialValue'], currentValue: FormFieldsProps<T>['initialValue'] }),
): IFormState {
  const state: IFormState = { initial: {}, current: {}, submitting: false, errors: {} };
  for (const name in fields) {
    const props = fields[name];
    if (!props) continue;
    const { initialValue, currentValue } = cb({ ...props, name });
    state.initial[name] = initialValue;
    state.current[name] = currentValue;
  }
  return state;
}

export default class Form<T> extends React.Component<FormProps<T>, IFormState> {
  public static defaultProps = {
    prefixCls: 'w-form',
    onSubmitError: () => ({}),
    onSubmit: noop,
    afterSubmit: noop,
    onChange: noop,
    resetOnSubmit: true,
    children: noop,
  }
  public state: IFormState;
  constructor(props: FormProps<T>) {
    super(props);
    this.state = newFormState(props.fields, ({ initialValue }) => {
      initialValue = newInitialValue(initialValue);
      return { initialValue, currentValue: initialValue };
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps: FormProps<T>) {
    if (nextProps.fields !== this.props.fields) {
      const state = newFormState(nextProps.fields, ({ initialValue }) => {
        initialValue = newInitialValue(initialValue);
        return { initialValue, currentValue: initialValue };
      });
      this.setState({...state});
    }
  }

  onSubmit = (e: React.FormEvent) => {
    e && e.preventDefault();
    const { onSubmit, resetOnSubmit, afterSubmit, onSubmitError } = this.props;
    const { initial, current } = this.state;
    this.setState({ submitting: true });
    const nextState = { submitting: false } as IFormState;

    const onError = (evn: React.FormEvent) => {
      this.setState({ ...nextState, errors: (onSubmitError && onSubmitError(evn)) || {} });
    };
    const onSuccess = (response: any) => {
      if (resetOnSubmit) {
        nextState.current = initial;
      }
      this.setState({ ...nextState, errors: {} });
      return () => afterSubmit!({state: this.state, response, reset: this.reset});
    };
    try {
      const afterSubmitPromise = onSubmit!({ initial, current });
      if (isPromise(afterSubmitPromise)) {
        return afterSubmitPromise.then(onSuccess).catch(onError);
      } else {
        return onSuccess(afterSubmitPromise);
      }
    } catch (evn) {
      onError(evn);
      // throw e;
    }
  }

  public reset = () => {
    const { initial } = this.state;
    this.setState({ current: initial, errors: {} });
  }

  public canSubmit = () => {
    const { fields } = this.props;
    const { submitting, current } = this.state;
    let passesValidators = true;
    for (const name in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, name)) {
        const props: FormFieldsProps<T> = fields[name];
        if (!props) continue;
        if (props.validator && props.validator(current[name])) {
          passesValidators = false;
          break;
        }
      }
    }
    return !submitting && passesValidators;
  }
  onChange = (
    name: string,
    validator: FormFieldsProps<T>['validator'],
    element?: React.ReactElement,
    cb?: (env: React.BaseSyntheticEvent<HTMLInputElement>) => void
  ) => (env: React.BaseSyntheticEvent<HTMLInputElement>, list?: string[]) => {
    const { onChange } = this.props;
    let value = env && env.target && 'value' in env.target ? env.target.value : env;
    // 控件 Checkbox.Group 多选值的处理
    value = list || value;
    // 控件 Checkbox 值的处理
    if (element && element.props.type === 'checkbox') {
      value = env.target.checked ? element.props.value : '';
    }
    // 控件 Switch 值的处理
    if (element && element.props.type === 'switch') {
      value = env.target.checked;
    }

    const nextState = { current: { ...this.state.current, [name]: value } } as IFormState;
    const error = validator && validator(value);
    if (!error) {
      nextState.errors = { ...this.state.errors };
      delete nextState.errors[name];
    }
    if (env && env.persist && typeof env.persist === 'function') env.persist();
    if (cb) this.setState(nextState, () => cb(env));
    else this.setState(nextState);
    onChange && onChange({ ...this.state, ...nextState });
  };
  controlField = ({ children = <Input type="text" />, validator, name }: FormFieldsProps<T>) => {
    const element = typeof children !== 'function'
      ? children
      : children({
        onChange: this.onChange(name!, validator),
        onSubmit: this.onSubmit,
        canSubmit: this.canSubmit,
      });
    if (!element || React.Children.count(element) !== 1 || !name) return element;
    const props: FormElementProps = { name: element.props.name || name };
    const hasCurrentValue = Object.prototype.hasOwnProperty.call(this.state.current, name);
    props.id = element.props.id;
    props.value = hasCurrentValue ? (this.state.current && this.state.current[name]) : element.props.value;

    const type = element.props.type;
    if (type === 'checkbox' || type === 'switch') {
      props.checked = !!props.value;
    }
    if (type === 'switch') {
      delete props.value;
    }
    props.onChange = (this.onChange(name, validator, element, element.props.onChange)) as FormElementProps['onChange'];
    return React.cloneElement(element, props as FormElementProps);
  }
  public render(): JSX.Element {
    const { prefixCls, className, fields, children, resetOnSubmit, onSubmitError, onChange, onSubmit, afterSubmit, ...others } = this.props;
    const { submitting } = this.state;
    const formUnits: FormChildrenProps['fields'] = {};
    for (const name in fields) {
      const props = fields[name];
      if (!props) continue;
      const error = this.state.errors[name];
      const childrenField: FormFieldsProps<T> = this.controlField({ ...props, name });
      const help = error || props.help;
      const labelFor = props.labelFor;
      formUnits[name] = (
        <FormItem {...{ ...props, key: name, children: childrenField, help, labelFor, state: this.state, name, hasError: !!error }} />
      );
    }
    return (
      <form {...{ ...others, className: classnames(prefixCls, className), onSubmit: this.onSubmit }}>
        <fieldset {...{ disabled: submitting }}>
          {typeof children === 'function' ? children({
            fields: formUnits,
            state: this.state,
            resetForm: this.reset,
            canSubmit: this.canSubmit,
          }) : children}
        </fieldset>
      </form>
    );
  }
}
