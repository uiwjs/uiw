import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Split extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
  }
  componentWillUnmount() {
    this.removeEvent();
  }
  onMouseDown(env) {
    this.startX = env.clientX;
    this.startY = env.clientY;
    this.move = true;
    this.target = env.target;
    const prevTarget = this.target.previousElementSibling;
    const nextTarget = this.target.nextElementSibling;
    this.preWidth = prevTarget.clientWidth;
    this.nextWidth = nextTarget.clientWidth;
    this.preHeight = prevTarget.clientHeight;
    this.nextHeight = nextTarget.clientHeight;
    window.addEventListener('mousemove', this.onDragging, false);
    window.addEventListener('mouseup', this.onDragEnd, false);
  }
  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onDragging(env) {
    if (!this.move) {
      return;
    }
    const { mode } = this.props;
    const nextTarget = this.target.nextElementSibling;
    const prevTarget = this.target.previousElementSibling;
    const currentX = env.clientX;
    const currentY = env.clientY;
    const x = currentX - this.startX;
    const y = currentY - this.startY;
    if (mode === 'horizontal') {
      prevTarget.style.maxWidth = `${this.preWidth + x}px`;
      nextTarget.style.maxWidth = `${this.nextWidth - x}px`;
    }
    if (mode === 'vertical') {
      prevTarget.style.maxHeight = `${this.preHeight + y}px`;
      nextTarget.style.maxHeight = `${this.nextHeight - y}px`;
    }
  }
  onDragEnd() {
    this.move = false;
    this.removeEvent();
  }
  render() {
    const { prefixCls, className, children, mode, ...other } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${mode}`);
    const child = React.Children.toArray(children);
    return (
      <div className={cls} {...other} ref={node => this.warpper = node}>
        {React.Children.map(child, (element, idx) => {
          const count = React.Children.count(child);
          const props = Object.assign({}, element.props, {
            className: classnames(`${prefixCls}-pane`),
            style: { ...element.props.style, flexBasis: `${100 / count}%` },
          });
          return (
            <React.Fragment>
              {idx !== 0 && React.createElement('div', {
                className: `${prefixCls}-bar`,
                onMouseDown: this.onMouseDown,
              })}
              {React.cloneElement(element, { ...props })}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

Split.propTypes = {
  prefixCls: PropTypes.string,
  mode: PropTypes.oneOf(['horizontal', 'vertical']),
};

Split.defaultProps = {
  prefixCls: 'w-split',
  mode: 'horizontal',
};
