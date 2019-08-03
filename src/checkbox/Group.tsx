import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import Checkbox from './Checkbox';
import './style/group.less';

export type Value = string[] & number[];
export interface ICheckboxGroupPorps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value?: Value;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: Value) => void;
}

export default class CheckboxGroup extends React.Component<ICheckboxGroupPorps> {
  public static defaultProps: ICheckboxGroupPorps = {
    prefixCls: 'w-checkbox-group',
  }
  private values: Value = [];
  render() {
    const { prefixCls, className, name, value, onChange, ...other } = this.props;
    return (
      <div {...other} className={classnames(prefixCls, className)}>
        {React.Children.map(this.props.children as Checkbox[], (element: any) => {
          (value as Value).includes(element.props.value as string & number) && this.values.push(element.props.value as string & number);
          return React.cloneElement(element, Object.assign({}, element.props, {
            name,
            checked: (value as Value).includes(element.props.value),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              if (!this.values.includes(element.props.value) && checked) {
                this.values.push(element.props.value);
              } else if (this.values.includes(element.props.value) && !checked) {
                this.values = this.values.filter((_item: string) => _item !== element.props.value as string) as Value;
              }
              onChange && onChange(e, this.values);
            },
          }));
        })}
      </div>
    );
  }
}
