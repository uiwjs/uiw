import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
];

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
    this.setTargetEventListeners();
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
    const box = this.box.getBoundingClientRect();
    const boxLeft = this.box.offsetLeft + this.box.offsetParent.offsetLeft;
    console.log('boxLeft:', boxLeft);
    const bottom = document.documentElement.clientHeight - box.y - box.height;
    if (offsetMode.top && box.y < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        top: offsetTop || 0,
        left: boxLeft,
        width: box.width,
      });
    } else if (bottom < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        bottom: offsetBottom || 0,
        left: boxLeft,
        width: box.width,
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
      window.addEventListener(eventName, this.updatePosition, false);
    });
  }
  clearEventListeners() {
    events.forEach((eventName) => {
      const handler = this.eventHandlers[eventName];
      window.removeEventListener(eventName, handler, false);
    });
  }
  getInstance = (node) => {
    if (node) {
      this.box = node;
    }
  }
  render() {
    const { prefixCls, className, children, offsetTop, offsetBottom, ...resetProps } = this.props;
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
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number,
  onChange: PropTypes.func,
};

Affix.defaultProps = {
  prefixCls: 'w-affix',
  onChange() { },
};
