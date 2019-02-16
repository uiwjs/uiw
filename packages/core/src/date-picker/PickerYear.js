import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/year-month.less';

export default class PickerYear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeYear: props.date || props.panelDate,
    };
  }
  onSelected(year, idx) {
    const { onSelected, panelNum } = this.props;
    const { activeYear } = this.state;
    if (idx === 0 || idx === panelNum.length - 1) {
      activeYear.setFullYear(year);
      this.setState({ activeYear });
      onSelected(year, true);
    } else {
      onSelected(year);
    }
  }
  render() {
    const { prefixCls, className, date, panelDate, onSelected, panelNum, ...other } = this.props;
    return (
      <div className={classnames(`${prefixCls}-year`, className)} {...other}>
        {panelNum.map((_, idx) => {
          const selectedYear = this.state.activeYear.getFullYear();
          const year = selectedYear + panelNum[idx];
          return (
            <div
              key={idx}
              className={classnames({
                selected: selectedYear === year,
                paging: idx === 0 || idx === panelNum.length - 1,
              })}
            >
              <span onClick={this.onSelected.bind(this, year, idx)}>{year}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

PickerYear.propTypes = {
  prefixCls: PropTypes.string,
  panelNum: PropTypes.arrayOf(PropTypes.number),
  onSelected: PropTypes.func,
};

PickerYear.defaultProps = {
  prefixCls: 'w-datepicker',
  panelNum: [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  onSelected() { },
};
