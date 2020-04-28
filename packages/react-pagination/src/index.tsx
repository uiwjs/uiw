/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLUlProps } from '@uiw/utils';
import './style/index.less';

export interface PaginationProps extends IProps, Omit<HTMLUlProps, 'onChange'> {
  prefixCls?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'default' | 'small';
  total?: number;
  pageSize?: number;
  divider?: boolean;
  current?: number;
  onChange?: (current: number, total: number, pageSize: number) => void;
}

export interface PaginationState {
  current: number;
}

export interface PaginationItemSourceData {
  type?: string;
  disabled?: boolean;
  active?: boolean;
  label?: number | string;
  goto?: number;
}

export default class Pagination extends React.Component<PaginationProps, PaginationState> {
  public static defaultProps: PaginationProps = {
    prefixCls: 'w-pagination',
    alignment: 'left',
    size: 'default',
    total: 0,
    pageSize: 10, // The number of pages displayed.
    current: 1,
    onChange: () => null,
  }
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      current: props.current as number,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: PaginationProps) {
    if (nextProps.current !== this.props.current) {
      this.setState({
        current: nextProps.current as number,
      });
    }
  }
  onClick(item: PaginationItemSourceData) {
    if (item.active || item.disabled) {
      return;
    }
    const { total, pageSize, onChange } = this.props;
    const { current } = this.state;
    const count = Math.ceil((total as number) / (pageSize as number));
    const state = {} as PaginationState;
    if (item.label) {
      state.current = item.label as number;
    }
    if (item.type === 'prev') {
      state.current = current - 1 > 0 ? current - 1 : 1;
    }
    if (item.type === 'next') {
      state.current = current + 1 <= count ? current + 1 : count;
    }
    if (/^(jumpPrev|jumpNext)/.test(item.type as string) && item.goto) {
      state.current = item.type === 'jumpPrev' ? current - item.goto : current + item.goto;
      if (state.current > count) {
        state.current = count;
      }
      if (state.current < 1) {
        state.current = 1;
      }
    }
    this.setState({ ...state }, () => {
      onChange && onChange(this.state.current, total as number, pageSize as number);
    });
  }
  initPageSoure(): PaginationItemSourceData[] {
    const { total, pageSize } = this.props;
    const { current } = this.state;
    const data: PaginationItemSourceData[] = [{ type: 'prev', disabled: current === 1 }];
    const count = Math.ceil((total as number) / (pageSize as number));
    const itemCount = count <= 5 ? count : 5;
    let num = 0;
    let basic = 0;
    if (current > 3 && count > 5) {
      data.push({ label: 1 });
    }
    if (current > 4 && count > 6) {
      data.push({ type: 'jumpPrev', label: '•••', goto: 5 });
    }
    while (num < itemCount) {
      num += 1;
      if (current > 3 && count > 5) {
        basic = current - 3;
      }
      let label = num + basic;
      if (count - current === 0 && count > 5) {
        label -= 2;
      }
      if (count - current === 1 && count > 5) {
        label -= 1;
      }
      if (label <= count) {
        data.push({ label, active: current === label });
      }
    }
    if (current + 3 < count && count > 6) {
      data.push({ type: 'jumpNext', label: '•••', goto: 5 });
    }
    if (current + 2 < count && count > 5) {
      data.push({ label: count });
    }
    data.push({ type: 'next', disabled: current === count });
    return data;
    // return [
    //   { type: 'prev', disabled: true },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { label: 1 },
    //   { label: 2, active: true },
    //   { label: 3 },
    //   { label: 4 },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { type: 'next' },
    // ];
  }
  render() {
    const { prefixCls, className, total, current, pageSize, size, alignment, divider, onChange, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${alignment}`]: alignment,
      [size as string]: size,
      divider,
    });
    return (
      <ul className={cls} {...other}>
        {this.initPageSoure().map((item: PaginationItemSourceData, idx) => {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          let label = <a>{item.label}</a>;
          if (/^(prev|next)$/.test(item.type as string)) {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            label = <a className={`arrow ${item.type}`} />;
          }
          return (
            <li
              className={classnames({
                active: item.active,
                disabled: item.disabled,
              })}
              onClick={this.onClick.bind(this, item)}
              key={idx}
            >
              {label}
            </li>
          );
        })}
      </ul>
    );
  }
}
