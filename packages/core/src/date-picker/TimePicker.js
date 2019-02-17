import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/year-month.less';

export default class PickerMonth extends React.Component {
  render() {
    const { prefixCls, className, date, panelDate, monthLabel, onSelected, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-month`, className)} {...other}>
        {[...Array(12)].map((_, idx) => {
          const selectedMonth = (date || panelDate).getMonth();
          return (
            <div key={idx} className={classnames({ selected: selectedMonth === idx })}>
              <span onClick={onSelected.bind(this, idx, false)}>{monthLabel[idx] || idx}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

PickerMonth.propTypes = {
  prefixCls: PropTypes.string,
  onSelected: PropTypes.func,
};

PickerMonth.defaultProps = {
  prefixCls: 'w-datepicker',
  onSelected() { },
};
