import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLTextProps } from '../utils/props';
import './style/index.less';

export interface ITextareaProps extends IProps, HTMLTextProps {}

export default class Textarea extends React.PureComponent<ITextareaProps> {
  public static defaultProps: ITextareaProps = {
    prefixCls: 'w-textarea',
  }
  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const cls = classnames(prefixCls, className);
    return (
      <textarea className={cls} {...restProps}>{this.props.children}</textarea>
    );
  }
}
