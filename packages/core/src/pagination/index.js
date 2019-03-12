import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.props.current) {
      this.setState({
        current: nextProps.current,
      });
    }
  }
  onClick(item) {
    if (item.active || item.disabled) {
      return;
    }
    const { total, pageSize, onChange } = this.props;
    const { current } = this.state;
    const count = Math.ceil(total / pageSize);
    const state = {};
    if (item.label) {
      state.current = item.label;
    }
    if (item.type === 'prev') {
      state.current = current - 1 > 0 ? current - 1 : 1;
    }
    if (item.type === 'next') {
      state.current = current + 1 <= count ? current + 1 : count;
    }
    if (/^(jumpPrev|jumpNext)/.test(item.type) && item.goto) {
      state.current = item.type === 'jumpPrev' ? current - item.goto : current + item.goto;
      if (state.current > count) {
        state.current = count;
      }
      if (state.current < 1) {
        state.current = 1;
      }
    }
    this.setState({ ...state }, () => {
      onChange(this.state.current);
    });
  }
  initPageSoure() {
    const { total, pageSize } = this.props;
    const { current } = this.state;
    const data = [{ type: 'prev', disabled: current === 1 }];
    const count = Math.ceil(total / pageSize);
    const itemCount = 5;
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
      if (current > 3) {
        basic = current - 3;
      }
      let label = num + basic;
      if (count - current === 0) {
        label -= 2;
      }
      if (count - current === 1) {
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
    const { prefixCls, className, total, current, pageSize, size, alignment, divider, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${alignment}`]: alignment,
      [size]: size,
      divider,
    });
    return (
      <ul className={cls} {...other}>
        {this.initPageSoure().map((item, idx) => {
          let label = <a>{item.label}</a>;
          if (/^(prev|next)$/.test(item.type)) {
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

Pagination.propTypes = {
  prefixCls: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  size: PropTypes.oneOf(['default', 'small']),
  total: PropTypes.number,
  pageSize: PropTypes.number,
  current: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  prefixCls: 'w-pagination',
  alignment: 'left',
  size: 'default',
  total: 0,
  pageSize: 10, // The number of pages displayed.
  current: 1,
  onChange() { },
};
