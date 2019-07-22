import React from 'react';
import classnames from 'classnames';
import Option from './Option';
import Group from './Group';
import { IProps } from '../utils/props';
import './style/index.less';

export interface ISelectProps extends IProps {
  size?: 'large' | 'default' | 'small'; 
}

export default class Select extends React.Component<ISelectProps> {
  public static defaultProps: ISelectProps = {
    prefixCls: 'w-select',
    size: 'default',
  }
  static Option = Option;
  static Group = Group;
  render() {
    const { prefixCls, className, size, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-${size}`]: size });
    return (
      <select {...resetProps} className={cls}>
        {React.Children.map(this.props.children, (element: any) => {
          return React.cloneElement(element, Object.assign({}, element.props, {}));
        })}
      </select>
    );
  }
}
