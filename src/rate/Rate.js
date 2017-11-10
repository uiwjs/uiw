import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon/';

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hoverIndex: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps })
  }
  onClick(e, key) {
    const { disabled, onChange } = this.props;
    let value = this.getValue(e, key)
    if (disabled) return;
    this.setState({
      value: value
    }, () => {
      onChange(e, value)
    })
  }
  getValue(e, key) {
    let value = key
    const { allowHalf } = this.props;
    let isLeft = (e.clientX - e.target.getBoundingClientRect().left) * 2 <= e.target.parentNode.clientWidth
    if (allowHalf) {
      e.persist();
      value = isLeft ? key + 0.5 : key + 1;
    } else {
      value = key + 1;
    }
    return value
  }
  onMouseMove(e, k) {
    const { disabled, onHoverChange } = this.props;
    let value = this.getValue(e, k)
    if (disabled) return;
    this.setState({
      hoverIndex: value
    }, () => {
      onHoverChange(e, value)
    })
  }
  onMouseLeave(e) {
    const { disabled, onHoverChange } = this.props;
    if (disabled) return;
    this.setState({
      hoverIndex: 0
    }, () => {
      onHoverChange(e, 0)
    })
  }
  starHalfOn(k) {
    const { value, hoverIndex } = this.state;
    if (hoverIndex > 0) {
      return (k < hoverIndex && k + 1 > hoverIndex) ? true : false
    } else {
      return (k < value && k + 1 > value) ? true : false
    }
  }
  starOn(k) {
    const { value, hoverIndex } = this.state;
    return hoverIndex === 0 ? k < value : k < hoverIndex;
  }
  tempArray(count) {
    let arr = []
    for (let i = 0; i < count; i++) arr.push(i);
    return arr;
  }
  render() {
    const { prefixCls, count, className, allowHalf, disabled, value, onHoverChange, color, ...other } = this.props;
    return (
      <ul {...other} className={this.classNames(className, `${prefixCls}`)}
        onMouseLeave={(e) => this.onMouseLeave(e)}
      >
        {this.tempArray(count).map((v, k) => {
          return (
            <li
              key={k}
              className={this.classNames({
                'star-on': this.starOn(k),
                'star-half-on': this.starHalfOn(k),
                'w-disabled': disabled,
              })}
              onClick={(e) => this.onClick(e, k)}
              onMouseMove={(e) => this.onMouseMove(e, k)}
            >
              <Icon type="star-on">
                <Icon style={{ color: this.starOn(k) || this.starHalfOn(k) ? color : '' }} type="star-on" />
              </Icon>
            </li>
          )
        })}
      </ul>
    )
  }
}

Rate.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
  character: PropTypes.node,
  disabled: PropTypes.bool,
  allowHalf: PropTypes.bool,
  onHoverChange: PropTypes.func,
  onChange: PropTypes.func,
}

Rate.defaultProps = {
  prefixCls: 'w-rate',
  value: 0,
  count: 5,
  // color: '#f5a623',
  disabled: false,
  allowHalf: false,
  onHoverChange() { },
  onChange() { }
}
