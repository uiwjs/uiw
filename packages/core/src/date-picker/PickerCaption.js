import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PickerCaption extends React.Component {
  renderMonth() {
    const { date, panelDate, monthLabel } = this.props;
    const month = (date || panelDate).getMonth();
    return (monthLabel && monthLabel[month]) || month + 1;
  }
  render() {
    const { prefixCls, className, date, panelDate, monthLabel, onSelected, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-caption`, className)} {...other}>
        <div className={`${prefixCls}-caption-month`} onClick={onSelected.bind(this, 'month')}>{this.renderMonth()}</div>
        <div className={`${prefixCls}-caption-year`} onClick={onSelected.bind(this, 'year')}>{(date || panelDate).getFullYear()}</div>
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
