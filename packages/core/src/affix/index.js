import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getScroll from '../utils/getScroll';

const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

function getTargetRect(target) {
  return target !== window ? (target).getBoundingClientRect() : ({ top: 0, left: 0, bottom: 0 });
}

function getOffset(element, target) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);
  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
}

function noop() { }

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

export default class Affix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderStyle: null,
      affixStyle: null,
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  eventHandlers = {}
  componentDidMount() {
    const target = this.props.target || getDefaultTarget;
    // Wait for parent component ref has its value
    this.timeout = setTimeout(() => {
      this.target = target();
      this.setTargetEventListeners();
    });
  }
  componentWillUnmount() {
    this.clearEventListeners();
    clearTimeout(this.timeout);
  }
  updatePosition() {
    let { offsetTop } = this.props;
    const { offsetBottom } = this.props;
    if (!this.box || !this.box.offsetParent) {
      return;
    }
    const elemSize = {
      width: this.box.clientWidth,
      height: this.box.clientHeight,
    };
    const offsetMode = { top: false, bottom: false };
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof offsetBottom === 'number';
    }
    const elemOffset = getOffset(this.box, this.target);
    const box = this.box.getBoundingClientRect();
    const bottom = document.documentElement.clientHeight - box.y - elemOffset.height;
    if (offsetMode.top && box.y < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        top: offsetTop || 0,
        left: elemOffset.left,
        width: elemOffset.width,
      });
    } else if (bottom < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        bottom: offsetBottom || 0,
        left: elemOffset.left,
        width: elemOffset.width,
      });
    } else {
      this.setPlaceholderStyle(null);
      this.setAffixStyle(null);
    }
  }
  setAffixStyle(affixStyle) {
    const { onChange } = this.props;
    const affixed = !!this.state.affixStyle;
    this.setState({ affixStyle }, () => {
      onChange(affixed);
    });
  }
  setPlaceholderStyle(placeholderStyle) {
    this.setState({ placeholderStyle });
  }
  // 设置监听事件
  setTargetEventListeners() {
    this.clearEventListeners();
    events.forEach((eventName) => {
      this.eventHandlers[eventName] = this.updatePosition;
      this.target && this.target.addEventListener(eventName, this.updatePosition, false);
    });
  }
  clearEventListeners() {
    events.forEach((eventName) => {
      const handler = this.eventHandlers[eventName];
      this.target && this.target.removeEventListener(eventName, handler, false);
    });
  }
  getInstance = (node) => {
    if (node) {
      this.box = node;
    }
  }
  render() {
    const { prefixCls, className, children, offsetTop, offsetBottom, target, ...resetProps } = this.props;
    const cls = classnames(className, `${prefixCls}`);
    return (
      <div {...resetProps} ref={this.getInstance} style={{ ...this.state.placeholderStyle, ...this.props.style }}>
        <div className={cls} style={this.state.affixStyle}>
          {children}
        </div>
      </div>
    );
  }
}

Affix.propTypes = {
  prefixCls: PropTypes.string,
  target: PropTypes.func,
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number,
  onChange: PropTypes.func,
};

Affix.defaultProps = {
  prefixCls: 'w-affix',
  onChange: noop,
};
