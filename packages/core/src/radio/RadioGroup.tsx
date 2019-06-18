import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import { IRadioProps } from './Radio';
import './style/group.less';

export interface IRadioGroupProps extends IProps {
  name?: IRadioProps['name'];
  value?: IRadioProps['value'];
  onChange?: IRadioProps['onChange'];
}

export default class RadioGroup extends React.Component<IRadioGroupProps & HTMLDivProps> {
  public static defaultProps: IRadioGroupProps & HTMLDivProps = {
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

