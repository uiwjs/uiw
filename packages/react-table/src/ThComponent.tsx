import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TableColumns, TableProps, LocationWidth } from './';
import { locationFixed } from './util';

interface ThComponentProps<T> {
  colNum: number;
  item: TableColumns<T>;
  prefixCls: string;
  titleNode: JSX.Element;
  onCellHead: TableProps<T>['onCellHead'];
  rowNum: number;
  locationWidth: { [key: string]: LocationWidth };
  updateLocation: (params: LocationWidth, index: string, key: string, colSpan?: number) => void;
}
export default class ThComponent<T> extends Component<ThComponentProps<T>> {
  componentDidMount() {
    const rect = ReactDOM.findDOMNode(this) as Element;
    this.props.updateLocation(
      { width: rect.getBoundingClientRect().width },
      `${this.props.rowNum}${this.props.colNum}`,
      this.props.item.key!,
      this.props.item.colSpan,
    );
  }

  render() {
    const { colNum, prefixCls, item, titleNode, onCellHead, rowNum, locationWidth } = this.props;
    const { title, key, render, children, ellipsis, fixed = false, ...thProps } = item;
    let cls = '';
    if (fixed) {
      if (fixed === 'right') {
        cls = prefixCls + '-fixed-right';
      } else {
        cls = prefixCls + '-fixed-true';
      }
    }
    return (
      <th
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
