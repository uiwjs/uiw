import React from 'react';
import { Col, Row } from '@uiw/react-grid';
import { IProps, HTMLInputProps } from '@uiw/utils';
import { FormFieldsProps } from './Form';
import { FormStyleItem, LabelStyle, FormStyleHelpStyle, FormStyleRowStyle } from './style/item';

export interface FormItemProps<T> extends IProps, HTMLInputProps {
  inline?: boolean;
  hasError?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  labelFor?: string;
  labelClassName?: string;
  help?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  initialValue?: string | number | T;
  validator?: FormFieldsProps<T>['validator'];
}

export default class FormItem<T> extends React.PureComponent<FormItemProps<T>> {
  public static defaultProps = {
    prefixCls: 'w-form-item',
  };
  render() {
    const {
      prefixCls,
      className,
      required,
      style,
      label,
      labelFor,
      labelClassName,
      labelStyle,
      help,
      inline,
      initialValue,
      validator,
      hasError,
      ...otherProps
    } = this.props;

    const cls = [prefixCls, className, hasError ? `${prefixCls}-error` : null].filter(Boolean).join(' ').trim();
    const labelCls = ['w-form-label', labelClassName].filter(Boolean).join(' ').trim();
    if (inline) {
      return (
        <FormStyleItem hasError={hasError} className={cls} style={style} {...otherProps}>
          <FormStyleRowStyle as={Row}>
            <LabelStyle as={Col} fixed className={labelCls}>
              {required && <label style={{ color: 'red' }}>*</label>}
              <LabelStyle style={labelStyle} htmlFor={labelFor}>
                {label}
              </LabelStyle>
            </LabelStyle>
            <Col className="w-form-row">{this.props.children}</Col>
          </FormStyleRowStyle>
          {help && (
            <FormStyleRowStyle as={Row}>
              <FormStyleHelpStyle as={Col} className="w-form-help">
                {help}
              </FormStyleHelpStyle>
            </FormStyleRowStyle>
          )}
        </FormStyleItem>
      );
    }
    return (
      <FormStyleItem hasError={hasError} className={cls} style={style} {...otherProps}>
        {label && (
          <React.Fragment>
            {required && <label style={{ color: 'red' }}>*</label>}
            <LabelStyle className={labelCls} style={labelStyle} htmlFor={labelFor}>
              {label}
            </LabelStyle>
          </React.Fragment>
        )}
        <Col className="w-form-row">{this.props.children}</Col>
        {help && <FormStyleHelpStyle className="w-form-help">{help}</FormStyleHelpStyle>}
      </FormStyleItem>
    );
  }
}
