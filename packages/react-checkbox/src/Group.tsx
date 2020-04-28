import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Checkbox from './Checkbox';
import './style/group.less';

export type Value = string[] & number[];
export interface CheckboxGroupPorps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value?: Value;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: Value) => void;
}

export class CheckboxGroup extends React.Component<CheckboxGroupPorps> {
  public static defaultProps: CheckboxGroupPorps = {
    prefixCls: 'w-checkbox-group',
  }
  private values: Value = [];
  render() {
    const { prefixCls, className, name, value, onChange, ...other } = this.props;
    this.values = [];
    return (
      <div {...other} className={classnames(prefixCls, className)}>
        {React.Children.map(this.props.children as Checkbox[], (element: any) => {
          if (value && value.includes(element.props.value)) {
            this.values.push(element.props.value);
          }
          return React.cloneElement(element, Object.assign({}, element.props, {
            name,
            checked: (value as Value).includes(element.props.value),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              const include = this.values.includes(element.props.value);
              if (!include && checked) {
                this.values.push(element.props.value);
              } else if (include && !checked) {
                this.values = this.values.filter((val: string) => val !== element.props.value as string) as Value;
              }
              onChange && onChange(e, this.values);
            },
          }));
        })}
      </div>
    );
  }
}
