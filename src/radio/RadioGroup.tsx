import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import { RadioProps } from './Radio';
import './style/group.less';

export interface RadioGroupProps extends IProps, HTMLDivProps {
  name?: RadioProps['name'];
  value?: RadioProps['value'];
  onChange?: RadioProps['onChange'];
}

export default class RadioGroup extends React.Component<RadioGroupProps> {
  public static defaultProps: RadioGroupProps & HTMLDivProps = {
    prefixCls: 'w-radio-group',
  }
  render() {
    const { prefixCls, className, name, value, onChange, ...other } = this.props;
    return (
      <div {...other} className={classnames(prefixCls, className)}>
        {React.Children.map(this.props.children, (element: any) => {
          return React.cloneElement(element, Object.assign({}, element.props, {
            checked: element.props.value === value,
            name,
            onChange,
          }));
        })}
      </div>
    );
  }
}

