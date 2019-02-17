import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/caption.less';

export default class PickerCaption extends React.Component {
  renderMonth() {
    const { panelDate, monthLabel } = this.props;
    const month = panelDate.getMonth();
    return (monthLabel && monthLabel[month]) || month + 1;
  }
  render() {
    const { prefixCls, className, panelDate, monthLabel, onSelected, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-caption`, className)} {...other}>
        <div className={`${prefixCls}-caption-month`} onClick={onSelected.bind(this, 'month')}>{this.renderMonth()}</div>
        <div className={`${prefixCls}-caption-year`} onClick={onSelected.bind(this, 'year')}>{panelDate.getFullYear()}</div>
      </div>
    );
  }
}

PickerCaption.propTypes = {
  prefixCls: PropTypes.string,
  onSelected: PropTypes.func,
};

PickerCaption.defaultProps = {
  prefixCls: 'w-datepicker',
  onSelected() { },
};
