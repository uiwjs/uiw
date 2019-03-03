import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Thead from './Thead';
import { getLevelItems } from './util';
import './style/index.less';

export default class Table extends React.Component {
  render() {
    const { prefixCls, className, columns, data, ...other } = this.props;
    const { header, render } = getLevelItems(columns);
    return (
      <table className={classnames(prefixCls, className)} {...other}>
        <Thead data={header} />
        <tbody>
          {data.map((trs, idx) => {
            return (
              <tr key={idx}>
                {Object.keys(trs).map((key, _idx) => {
                  return (
                    <td key={_idx}>{render[key] ? render[key](trs[key], key, trs, idx, _idx) : trs[key]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  prefixCls: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.array,
};

Table.defaultProps = {
  prefixCls: 'w-table',
  columns: [],
  data: [],
};
