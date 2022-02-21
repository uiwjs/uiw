import React, { useState, useImperativeHandle, useMemo } from 'react';
import { IProps } from '@uiw/utils';
import FormItem, { FormItemProps } from './FormItem';
import './style/form.less';

export interface FormProps<T> extends IProps, Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange' | 'onSubmit'> {
  prefixCls?: string;
  fields?: Record<string, FormFieldsProps<T>>;
  onSubmit?: (state: FormSubmitProps, event: React.FormEvent) => any;
  afterSubmit?: (result: FormAfterSubmitProps) => any;
  onChange?: (state: FormState) => void;
  onSubmitError?: (evn: any) => any;
  resetOnSubmit?: boolean;
  children?: (handle: FormChildrenProps) => JSX.Element | JSX.Element | undefined;
}

export interface FormState {
  submitting: boolean;
  initial: Record<string, any>;
  current: FormState['initial'];
  errors: Record<string, any>;
}

export interface FormFieldsProps<T> extends FormItemProps<T> {
  name?: string;
  children?: React.ReactNode;
  help?: React.ReactNode;
  labelFor?: string;
  inline?: boolean;
  checked?: boolean;
  initialValue?: string | number | T;
  required?: boolean;
  validator?: (currentValue: any) => any;
}

export interface FormSubmitProps {
  initial: FormState['initial'];
  current: FormState['current'];
}

export interface FormAfterSubmitProps {
  state: FormState;
  response: any;
  reset: () => void;
}

export interface FormChildrenProps {
  fields: Record<string, React.ReactElement>;
  resetForm: () => void;
  canSubmit: () => boolean;
  state: FormState;
}

export type FormElementProps = {
  id?: string;
  name?: string;
  value?: string | boolean;
  checked?: boolean;
  onChange?: (env: React.BaseSyntheticEvent<HTMLInputElement>, list?: string[]) => void;
};

export type FormRefType = Record<'onSubmit' | 'resetForm' | 'getFieldValues' | 'setFields', Function>;

function newFormState<T>(
  fields: FormProps<T>['fields'],
  cb: (porps: FormFieldsProps<T>) => {
    initialValue: FormFieldsProps<T>['initialValue'];
    currentValue: FormFieldsProps<T>['initialValue'];
  },
): FormState {
  const state: FormState = {
    initial: {},
    current: {},
    submitting: false,
    errors: {},
  };
  for (const name in fields) {
    const props = fields[name];
    if (!props) continue;
    const { initialValue, currentValue } = cb({ ...props, name });
    state.initial[name] = Array.isArray(initialValue) ? [...initialValue] : initialValue;
    state.current[name] = currentValue;
  }
  return state;
}

function newInitialValue<T>(value: FormFieldsProps<T>['initialValue']) {
  return value === null || value === undefined ? '' : value;
}

const isPromise = (promise: Promise<any>) => promise && typeof promise.then === 'function';

function Form<T>(
  {
    prefixCls = 'w-form',
    className,
    fields,
    children,
    resetOnSubmit,
    onSubmitError,
    onChange,
    onSubmit,
    afterSubmit,
    ...others
  }: FormProps<T>,
  ref: React.Ref<React.ForwardedRef<FormRefType>>, //| React.RefObject<FormRefType>,
) {
  const initData = useMemo(
    () =>
      newFormState(fields, ({ initialValue }) => {
        initialValue = newInitialValue(initialValue);
        return { initialValue, currentValue: initialValue };
      }),
    [],
  );
  const [data, setData] = useState<FormState>(initData);

  useImperativeHandle<React.ForwardedRef<FormRefType>, any>(
    ref,
    () => ({
      onSubmit: handleSubmit,
      resetForm: handleReset,
      getFieldValues: () => data.current,
      getError: () => data.errors,
      setFields: setFields,
    }),
    [data],
  );

  const formUnits: FormChildrenProps['fields'] = {};
  for (const name in fields) {
    const props = fields[name];
    if (!props) continue;
    const error = data.errors[name];
    if (typeof props.initialValue === 'boolean') {
      props.checked = props.initialValue;
    }
    const childField: FormFieldsProps<T> = controlField({
      ...props,
      name,
    });
    const help = error || props.help;
    const labelFor = props.labelFor;
    formUnits[name] = (
      <FormItem
        {...{
          ...props,
          key: name,
          children: childField,
          help,
          labelFor,
          state: data,
          name,
          hasError: !!error,
        }}
      />
    );
  }

  function setFields(fields: FormState['current']) {
    data.current = fields;
    setData(data);
  }

  function handleChange(
    name: string,
    validator: FormFieldsProps<T>['validator'],
    element?: React.ReactElement,
    cb?: (env: React.BaseSyntheticEvent<HTMLInputElement>) => void,
  ) {
    return (env: React.BaseSyntheticEvent<HTMLInputElement>, list?: string[]) => {
      let value = env && env.target && 'value' in env.target ? env.target.value : env;
      // 控件 Checkbox.Group 多选值的处理
      value = list || value;
      // 控件 Checkbox 值的处理
      if (!list && element && env && env.target && /(radio)/.test(env.target.type)) {
        // 控件 Switch/Radio/Checkbox 值的处理
        value = env.target.value ? env.target.value : env.target.checked;
      }
      if (!list && element && env && env.target && /(checkbox)/.test(env.target.type)) {
        // 控件 Switch/Radio/Checkbox 值的处理
        value = env.target.checked;
      }
      const nextState = {
        current: { ...data.current, [name]: value },
      } as FormState;
      const error = validator && validator(value);
      if (!error) {
        nextState.errors = { ...data.errors };
        delete nextState.errors[name];
      }
      if (env && env.persist && typeof env.persist === 'function') env.persist();
      setData({ ...data, ...nextState });
      if (cb) {
        cb(env);
      }
      onChange && onChange({ ...data, ...nextState });
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e && e.preventDefault();
    const { initial, current } = data;
    setData({ ...data, submitting: true });
    const nextState = { submitting: false } as FormState;
    const onError = (evn: unknown) =>
      setData({
        ...data,
        ...nextState,
        errors: (onSubmitError && onSubmitError(evn)) || {},
      });
    const onSuccess = (response: any) => {
      if (resetOnSubmit) {
        nextState.current = initial;
      }
      setData({ ...data, ...nextState, errors: {} });
      afterSubmit && afterSubmit({ state: data, response, reset: handleReset });
    };
    try {
      const afterSubmitPromise = onSubmit ? onSubmit({ initial, current }, e) : undefined;
      if (afterSubmitPromise && isPromise(afterSubmitPromise)) {
        return afterSubmitPromise.then(onSuccess).catch(onError);
      } else {
        return onSuccess(afterSubmitPromise);
      }
    } catch (evn) {
      onError(evn);
    }
  }

  function canSubmit() {
    const { submitting, current = {} } = data;
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

  function handleReset() {
    let { initial } = data;
    const initials = { ...initial };
    Object.entries(initials).map(([key, value]) => {
      if (Array.isArray(value)) {
        initials[key] = [...value];
      }
    });
    setData({ ...data, initial, current: initials, errors: {} });
  }

  function controlField({
    children,
    validator,
    name,
    help,
    label,
    labelFor,
    labelClassName,
    labelStyle,
    inline,
    initialValue,
    ...other
  }: FormFieldsProps<T>) {
    const element =
      typeof children !== 'function'
        ? children
        : children({
            onChange: handleChange(name!, validator),
            onSubmit: handleSubmit,
            canSubmit: canSubmit,
          });
    if (!element || React.Children.count(element) !== 1 || !name) return element;
    const props = {
      name: element.props.name || name,
      ...other,
    } as FormElementProps;
    const hasCurrentValue = Object.prototype.hasOwnProperty.call(data.current, name);
    props.id = element.props.id;
    props.value = hasCurrentValue ? data.current && data.current[name] : props.value;
    // : element.props.value;

    const type = element.props.type;
    // console.log('type', element)
    if (type === 'checkbox' || type === 'switch' || typeof props.value === 'boolean') {
      props.checked = !!props.value;
      delete props.value;
    }
    props.onChange = handleChange(name, validator, element, element.props.onChange) as FormElementProps['onChange'];
    return React.cloneElement(element, props as FormElementProps);
  }

  return (
    <form
      {...{
        ...others,
        className: [prefixCls, className].filter(Boolean).join(' ').trim(),
        onSubmit: handleSubmit,
      }}
    >
      <fieldset {...{ disabled: data.submitting }}>
        {typeof children === 'function'
          ? children({
              fields: formUnits,
              state: data,
              resetForm: handleReset,
              canSubmit: canSubmit,
            })
          : children}
      </fieldset>
    </form>
  );
}

export default React.forwardRef<React.Ref<FormRefType>, FormProps<{}>>(Form);
