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
  onClick(e) {
    const { disabled, onChange } = this.props;
    const { hoverIndex } = this.state;
    if (disabled) return;
    this.setState({
      value: hoverIndex
    }, () => {
      onChange(e, hoverIndex)
    })
  }
  onMouseMove(e, k) {
    const { disabled, onHoverChange, allowHalf } = this.props;
    let value = k
    if (disabled) return;
    if (allowHalf) {
      e.persist();
      let isLeft = (e.clientX - e.target.getBoundingClientRect().left) * 2 <= e.target.parentNode.clientWidth;
      if (isLeft) {
        value = k + 0.5;
      } else {
        value = k + 1;
      }
    } else {
      value = k + 1;
    }
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
  render() {
    const { prefixCls, count, className, allowHalf, disabled, onHoverChange, ...other } = this.props;
    const { value, hoverIndex } = this.state;
    return (
      <ul {...other} className={this.classNames(className, `${prefixCls}`)}
        onMouseLeave={(e) => this.onMouseLeave(e)}
      >
        {[...Array(count)].map((v, k) => {
          //console.log("www///", k, hoverIndex, value, value - 1, k + 1, (k < value && k + 1 > value))
          return (
            <li
              key={k}
              className={this.classNames({
                'star-on': hoverIndex === 0 ? k < value : k < hoverIndex,
                'star-half-on': this.starHalfOn(k),
                'w-disabled': disabled,
              })}
              onClick={(e) => this.onClick(e, k)}
              onMouseMove={(e) => this.onMouseMove(e, k)}
            >
              <Icon type="star-on">
                <Icon type="star-on" />
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
  disabled: false,
  allowHalf: false,
  onHoverChange() { },
  onChange() { }
}
