import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Thead from './Thead';
import { getLevelItems } from './util';
import './style/index.less';

export default class Table extends React.Component {
  render() {
    const { prefixCls, className, columns, data, title, footer, bordered, onCell, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
    });
    const { header, render } = getLevelItems(columns);
    return (
      <div className={cls} {...other}>
        <table>
          {title && <caption>{title}</caption>}
          {columns && columns.length > 0 && <Thead data={header} />}
          {data && data.length > 0 && (
            <tbody>
              {data.map((trs, idx) => {
                return (
                  <tr key={idx}>
                    {Object.keys(trs).map((key, _idx) => {
                      return (
                        <td onClick={onCell.bind(this, trs[key], key, trs, idx, _idx)} key={_idx}>{render[key] ? render[key](trs[key], key, trs, idx, _idx) : trs[key]}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
          {this.props.children}
        </table>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}

Table.propTypes = {
  prefixCls: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bordered: PropTypes.bool,
  onCell: PropTypes.func,
};

Table.defaultProps = {
  prefixCls: 'w-table',
  columns: [],
  data: [],
  onCell() { },
};
