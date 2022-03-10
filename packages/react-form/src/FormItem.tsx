import React from 'react';
import { Col, Row } from '@uiw/react-grid';
import { IProps, HTMLInputProps } from '@uiw/utils';
import { FormFieldsProps } from './Form';
import './style/form-item.less';

export interface FormItemProps<T> extends IProps, Omit<HTMLInputProps, 'onChange'> {
  inline?: boolean;
  hasError?: boolean;
  label?: React.ReactNode;
  required?: boolean;
  labelFor?: string;
  labelClassName?: string;
  help?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  initialValue?: string | number | T;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange,
      ...otherProps
    } = this.props;

    const cls = [prefixCls, className, hasError ? `${prefixCls}-error` : null].filter(Boolean).join(' ').trim();
    const labelCls = ['w-form-label', labelClassName].filter(Boolean).join(' ').trim();
    if (inline) {
      return (
        <div className={cls} style={style} {...otherProps} onChange={onChange}>
          <Row>
            <Col fixed className={labelCls}>
              {required && <label style={{ color: 'red' }}>*</label>}
              <label style={labelStyle} htmlFor={labelFor}>
                {label}
              </label>
            </Col>
            <Col className="w-form-row">{this.props.children}</Col>
          </Row>
          {help && (
            <Row>
              <Col className="w-form-help">{help}</Col>
            </Row>
          )}
        </div>
      );
    }
    return (
      <div className={cls} style={style} {...otherProps} onChange={onChange}>
        {label && (
          <React.Fragment>
            {required && <label style={{ color: 'red' }}>*</label>}
            <label className={labelCls} style={labelStyle} htmlFor={labelFor}>
              {label}
            </label>
          </React.Fragment>
        )}
        <Col className="w-form-row">{this.props.children}</Col>
        {help && <div className="w-form-help">{help}</div>}
      </div>
    );
  }
}
