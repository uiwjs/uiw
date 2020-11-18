import React, { useRef } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/group.less';

export type Value = string[] | number[];
export interface CheckboxGroupPorps
  extends IProps,
    Omit<HTMLDivProps, 'onChange'> {
  value?: Value;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, values: Value) => void;
}

export function CheckboxGroup(props: CheckboxGroupPorps = {}) {
  const {
    prefixCls = 'w-checkbox-group',
    className,
    name,
    value,
    onChange,
    ...other
  } = props;
  const valueRef = useRef<Value>([]);
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <div {...other} className={cls}>
      {React.Children.map(props.children, (element: any) => {
        if (Array.isArray(value) && value.includes(element.props.value)) {
          if (!valueRef.current.includes(element.props.value)) {
            valueRef.current.push(element.props.value);
          }
        }
        return React.cloneElement(
          element,
          Object.assign({}, element.props, {
            name,
            checked: valueRef.current.includes(element.props.value),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.type && e.target.type !== 'checkbox') return;
              const checked = e.target.checked;
              const include = valueRef.current.includes(element.props.value);
              if (!include && checked) {
                valueRef.current.push(element.props.value);
              } else if (include && !checked) {
                valueRef.current = valueRef.current.filter(
                  (val) => val !== element.props.value,
                ) as Value;
              }
              onChange && onChange(e, valueRef.current);
            },
          }),
        );
      })}
    </div>
  );
}
