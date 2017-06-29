import React from 'react';
// import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition/'

export default class Popper extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { onChange } = this.props;
    if (this.props.visible !== nextProps.visible) {
      onChange(nextProps.visible);
    }
  }
  handleClickOutside(e) {
    const { clickOutside } = this.props;
    clickOutside && clickOutside(e);
  }
  render() {
    const { style, className, visible, prefixCls, tag, children } = this.props;
    let wrapStyle = Object.assign.apply(null, [style, {}])
    return (
      <Transition type="fade-in">
        {visible &&
          React.createElement(tag, { style: wrapStyle, className: this.classNames(prefixCls, className) }, children)
        }
      </Transition>
    )
  }
}

Popper.propTypes = {
  prefixCls: PropTypes.string,
  tag: PropTypes.string,
  visible: PropTypes.bool,
  onChange: PropTypes.func,
}

Popper.defaultProps = {
  prefixCls: 'w-popper',
  tag: 'div',
  style: {},
  visible: false,
  onChange() { }
}
