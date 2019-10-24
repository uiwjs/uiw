import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import Row from '../grid/Row';
import Col from '../grid/Col';
import { IProps, HTMLDivProps } from '../utils/props';
import { FormFieldsProps } from './Form';
import './style/form-item.less';

export interface IFormItemProps<T> extends IProps, HTMLDivProps {
  inline?: boolean;
  hasError?: boolean;
  label?: React.ReactNode;
  labelFor?: string;
  labelClassName?: string;
  help?: React.ReactNode;
  labelStyle?: CSSProperties;
  initialValue?: FormFieldsProps<T>['initialValue'];
  validator?: FormFieldsProps<T>['validator'];
}

export default class FormItem<T> extends React.PureComponent<IFormItemProps<T>> {
  public static defaultProps = {
    prefixCls: 'w-form-item',
  }
  render() {
    const { prefixCls, className, style, label, labelFor, labelClassName, labelStyle, help, inline, initialValue, validator, hasError, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-error`]: hasError,
    });
    const labelCls = classnames('w-form-label', labelClassName);
    if (inline) {
      return (
        <div className={cls} style={style} {...otherProps}>
          <Row>
            <Col fixed className={labelCls}><label style={labelStyle} htmlFor={labelFor}>{label}</label></Col>
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
      <div className={cls} style={style} {...otherProps}>
        {label && <label className={labelCls} style={labelStyle} htmlFor={labelFor}>{label}</label>}
        <Col className="w-form-row">{this.props.children}</Col>
        {help && <div className="w-form-help">{help}</div>}
      </div>
    );
  }
}

