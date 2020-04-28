import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLTextProps } from '@uiw/utils';
import './style/index.less';

export interface TextareaProps extends IProps, HTMLTextProps {}

export default class Textarea extends React.PureComponent<TextareaProps> {
  public static defaultProps: TextareaProps = {
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
