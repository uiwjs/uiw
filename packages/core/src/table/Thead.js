import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Thead extends React.Component {
  render() {
    const { prefixCls, className, data, ...other } = this.props;
    return (
      <thead className={classnames(prefixCls, className)} {...other}>
        {data.map((tds, idx) => (
          <tr key={idx}>
            {tds.map((item, _idx) => {
              const { title, key, render, children, ...thProps } = item;
              return (
                <th key={_idx} {...thProps}>{title}</th>
              );
            })}
          </tr>
        ))}
      </thead>
    );
  }
}

Thead.propTypes = {
  prefixCls: PropTypes.string,
  data: PropTypes.array,
};

Thead.defaultProps = {
  prefixCls: 'w-table-thead',
  data: [],
};
