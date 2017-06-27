import React from 'react';
import ReactDOM from 'react-dom';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition/'

export default class Popper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    }
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this), true);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside.bind(this), true);
  }
  componentWillReceiveProps(props) {
    if (props.visible !== this.props.visible) {
      console.log("visible", props.visible, this.state, this.setState)
      this.setState({
        visible: props.visible
      });
    }
  }
  handleClickOutside(e) {
    // https://codepen.io/graubnla/pen/EgdgZm
    // Ignore clicks on the component it self
    // Detect a click outside of a React Component
    // https://www.dhariri.com/posts/57c724e4d1befa66e5b8e056
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({
        visible: false
      });
    }
  }
  render() {
    const { style, className, prefixCls, tag, children } = this.props;
    const { visible } = this.state;
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
}

Popper.defaultProps = {
  prefixCls: 'w-popper',
  tag: 'div',
  style: {},
  visible: false,
}
