import React from 'react';
import classnames from 'classnames';
import FormItem from './FormItem';
import Input from '../input';
import { IProps } from '../utils/props';
import './style/form.less';

export interface IFormFieldsProps {
  name?: string;
  labelFor?: string;
  initialValue?: string | number;
  label?: React.ReactNode;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  inline?: boolean;
  validator?: (currentValue: any) => void;
  help?: React.ReactNode;
  children?: React.ReactNode;
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

export interface IFormSubmitProps {
  initial: IFormState['initial'];
  current: IFormState['initial'];
}

export interface IFormAfterSubmitProps {
  state: IFormState;
  response: any;
  reset: () => void;
}

export interface IFormChildrenProps {
  fields: {
    [key: string]: React.ReactElement;
  },
  resetForm: () => void;
  canSubmit: () => boolean;
  state: IFormState;
}

export interface IFormProps extends IProps {
  prefixCls?: string;
  fields?: {
    [key: string]: IFormFieldsProps;
  };
  onSubmit?: (state: IFormSubmitProps) => any;
  afterSubmit?: (result: IFormAfterSubmitProps) => any;
  onChange?: (state: IFormState) => void;
  onSubmitError?: (evn: React.FormEvent) => void;
  resetOnSubmit?: boolean;
  children?: (handle: IFormChildrenProps) => JSX.Element | JSX.Element | undefined;
}


export type IFormElementProps = {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (env: React.BaseSyntheticEvent<HTMLInputElement>, list?: string[]) => void;
};

const isPromise = (promise: Promise<any>) => promise && typeof promise.then === 'function';
const initialValue = (value: IFormFieldsProps['initialValue']) => ((value === null || value === undefined) ? '' : value);
const noop = () => undefined;

export default class Form extends React.PureComponent<IFormProps, IFormState> {
  public static defaultProps: IFormProps = {
    prefixCls: 'w-form',
    onSubmitError: () => ({}),
    onSubmit: noop,
    afterSubmit: noop,
    onChange: noop,
    resetOnSubmit: true,
    children: noop,
  }
  public state: IFormState;
  constructor(props: IFormProps) {
    super(props);
    const { fields } = props;
    this.state = {
      submitting: false,
      errors: {},
      initial: {},
      current: {},
    };
    // eslint-disable-next-line
    for (const name in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, name)) {
        const propsField = fields[name];
        // eslint-disable-next-line
        if (!propsField) continue;
        this.state.initial[name] = initialValue(fields[name].initialValue);
        this.state.current[name] = initialValue(fields[name].initialValue);
      }
    }
  }
  onSubmit = (e: React.FormEvent) => {
    e && e.preventDefault();
    const { onSubmit, resetOnSubmit, afterSubmit, onSubmitError } = this.props;
    const { initial, current } = this.state;
    this.setState({ submitting: true });
    const nextState = { submitting: false };

    const onError = (evn: React.FormEvent) => {
      this.setState({ ...nextState, errors: (onSubmitError && onSubmitError(evn)) || {} });
    };
    const onSuccess = (response: any) => {
      this.setState({
        ...nextState,
        current: resetOnSubmit ? initial : current,
        initial: resetOnSubmit ? initial : current,
        errors: {},
      });
      const after = () => afterSubmit!({ state: this.state, response, reset: this.reset });
      return after();
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

  reset = () => {
    const { initial } = this.state;
    this.setState({ current: initial, errors: {} });
  }

  canSubmit = () => {
    const { fields } = this.props;
    const { submitting, current } = this.state;
    let passesValidators = true;
    for (const name in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, name)) {
        const props: IFormFieldsProps = fields[name];
        // eslint-disable-next-line
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
    validator: IFormFieldsProps['validator'],
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
  controlField = ({ children = <Input type="text" />, validator, name }: IFormFieldsProps) => {
    const element = typeof children !== 'function'
      ? children
      : children({
        onChange: this.onChange(name!, validator),
        onSubmit: this.onSubmit,
        canSubmit: this.canSubmit,
      });
    if (!element || React.Children.count(element) !== 1 || !name) return element;
    const props: IFormElementProps = { name: element.props.name || name };
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
    props.onChange = (this.onChange(name, validator, element, element.props.onChange)) as IFormElementProps['onChange'];
    return React.cloneElement(element, props as IFormElementProps);
  }
  public render(): JSX.Element {
    const { prefixCls, className, fields, children, resetOnSubmit, onSubmitError, onChange, onSubmit, afterSubmit, ...others } = this.props;
    const { submitting } = this.state;
    const formUnits: IFormChildrenProps['fields'] = {};
    // eslint-disable-next-line
    for (const name in fields) {
      const props = fields[name]; // eslint-disable-line
      if (!props) continue; // eslint-disable-line
      const error = this.state.errors[name];
      const childrenField: IFormFieldsProps = this.controlField({ ...props, name });
      const help = error || props.help;
      const labelFor = props.labelFor;
      formUnits[name] = (
        <FormItem {...{ ...props, key: name, children: childrenField, help, labelFor, state: this.state, name, hasError: !!error }}/>
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
