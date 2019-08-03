import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLInputProps } from '../utils/props';

/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */
export interface IAbstractProps extends IProps, Omit<HTMLInputProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (even: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAbstractState {
  checked?: boolean;
}

export default class Abstract extends React.Component<IAbstractProps> {
  public static defaulProps: IAbstractProps = {
    prefixCls: 'w-radio',
    type: 'radio',
    disabled: false,
    checked: false,
    value: '',
  }
  public state:IAbstractState = {}
  constructor(props: IAbstractProps) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }
  componentWillReceiveProps(nextPrrops: IAbstractProps) {
    if (nextPrrops.checked !== this.props.checked) {
      this.setState({ checked: nextPrrops.checked });
    }
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { onChange } = this.props;
    this.setState({ checked: e.target.checked }, onChange && onChange.bind(this, e));
  }
  render() {
    const { prefixCls, className, style, children, size, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      disabled: other.disabled, [`${prefixCls}-${size}`]: size,
    });
    other.checked = this.state.checked as boolean;
    other.onChange = this.onChange;
    const label = children || other.value;
    return (
      <label {...{ className: cls, style }}>
        <input {...other} />
        {label && <div className={`${prefixCls}-text`}>{label}</div>}
      </label>
    );
  }
}
