import React, { Component } from 'react';
import { TableColumns, TableProps, LocationWidth } from './';
import { locationFixed } from './util';

interface ThComponentProps<T extends { [key: string]: V } = any, V = any> {
  colNum: number;
  rightNum: number;
  item: TableColumns<T>;
  prefixCls: string;
  titleNode: JSX.Element;
  onCellHead: TableProps<T>['onCellHead'];
  rowNum: number;
  locationWidth: { [key: string]: LocationWidth };
  updateLocation: (params: LocationWidth, index: string, key: string, colSpan?: number) => void;
}
export default class ThComponent<T extends { [key: string]: V } = any, V = any> extends Component<ThComponentProps<T>> {
  wrapper = React.createRef<HTMLTableCellElement>();
  componentDidMount() {
    this.props.updateLocation(
      { width: this.wrapper.current!.getBoundingClientRect().width },
      `${this.props.rowNum}${this.props.colNum}`,
      this.props.item.key!,
      this.props.item.colSpan,
    );
  }

  render() {
    const { colNum, rightNum, prefixCls, item, titleNode, onCellHead, rowNum, locationWidth } = this.props;
    const { title, key, render, children, ellipsis, fixed = false, ...thProps } = item;
    let cls = '';
    if (fixed) {
      if (fixed === 'right') {
        const rightCls = rightNum === 1 ? `${prefixCls}-fixed-right-first` : '';
        cls = prefixCls + '-fixed-right ' + rightCls;
      } else {
        cls = prefixCls + '-fixed-true';
      }
    }
    return (
      <th
        ref={this.wrapper}
        key={colNum}
        {...thProps}
        style={{ ...thProps.style, ...locationFixed(fixed, locationWidth, `${rowNum}${colNum}`) }}
        className={`${prefixCls}-tr-children-${item?.align || 'left'} ${item.className || ''} ${cls}`}
        onClick={(evn) => onCellHead?.(item, colNum, rowNum!, evn)}
      >
        {titleNode}
      </th>
    );
  }
}
