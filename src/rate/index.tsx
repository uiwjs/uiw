import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface IRateProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value: number;
  readOnly?: boolean;
  count?: number;
  color?: string;
  disabled?: boolean;
  character?: React.ReactNode;
  onChange?: (event: React.MouseEvent<HTMLElement>, key: number) => void;
  onHoverChange?: (event: React.MouseEvent<HTMLElement>, key: number) => void;
}

export interface IRateState {
  value: number;
  hoverCount: number;
}

interface IRateChildProps {
  key: number;
  className: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default class Rate extends React.Component<IRateProps, IRateState> {
  public state: IRateState;
  public static defaultProps: IRateProps = {
    prefixCls: 'w-rate',
    value: 0,
    count: 5,
    character: '★',
    readOnly: false,
  }
  constructor(props: IRateProps) {
    super(props);
    this.state = {
      value: props.value,
      hoverCount: -1,
    };
  }
  onClick(e: React.MouseEvent<HTMLElement>, key: number) {
    const { readOnly, onChange } = this.props;
    if (readOnly) return;
    this.setState({ value: key + 1 }, () => {
      onChange && onChange(e, key);
    });
  }
  onMouseLeave() {
    this.setState({ hoverCount: -1 });
  }
  onMouseMove(e: React.MouseEvent<HTMLElement>, key: number) {
    const { onHoverChange } = this.props;
    const { hoverCount } = this.state;
    if (hoverCount !== key) {
      this.setState({ hoverCount: key }, () => {
        onHoverChange && onHoverChange(e, key);
      });
    }
  }
  render() {
    const { prefixCls, count, value, className, character, readOnly, disabled, onChange, onHoverChange, color, ...other } = this.props;
    const cls = classnames(prefixCls, className, { disabled });
    return (
      <div
        {...other}
        className={cls}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        {Array(count).fill(null).map((_, idx) => {
          const props: IRateChildProps = {
            key: idx,
            className: classnames({
              'star-on': idx < this.state.value && this.state.hoverCount === -1,
              'hover-on': idx <= this.state.hoverCount,
              'half-on': parseInt(this.state.value.toString(), 10) === idx && Math.ceil(this.state.value) - 1 === idx,
            }),
          };
          if (!readOnly) {
            props.onClick = e => this.onClick(e, idx);
            props.onMouseMove = e => this.onMouseMove(e, idx);
          }

          if (color && (idx <= this.state.hoverCount || (idx < this.state.value && this.state.hoverCount === -1))) {
            props.style = { ...props.style, color };
          }

          return (
            <span {...props}>
              <span className={classnames(`${prefixCls}-hight`)}>{character}</span>
              <span className={`${prefixCls}-bg`}>{character}</span>
            </span>
          );
        })}
      </div>
    );
  }
}
