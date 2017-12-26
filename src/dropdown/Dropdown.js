import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }
  onClick = () => {
    console.log('click!!');
  }
  onMouseEnter = () => {
    this.setState({ visible: true });
    this.leaveDelay = false;
  }
  onMouseLeave = () => {
    this.leaveDelay = true;
    setTimeout(() => {
      this.leaveDelay && this.setState({ visible: false });
    }, 300);
  }
  render() {
    const { prefixCls, className, children, disabled, menu, trigger, ...resetProps } = this.props;
    const { visible } = this.state;

    if (trigger === 'click') {
      resetProps.onClick = this.onClick;
    }
    if (trigger === 'hover') {
      resetProps.onMouseEnter = this.onMouseEnter;
      resetProps.onMouseLeave = this.onMouseLeave;
    }
    delete resetProps.visible;

    return (
      <div className={this.classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
      })}
        {...resetProps}
      >
        {React.Children.map(children, (child, index) => React.cloneElement(child, { key: index }))}
        <Transition in={visible} sequence="fadeIn">
          <div className={`${prefixCls}-menu-warpper`}>
            {menu && !disabled && React.cloneElement(menu)}
          </div>
        </Transition>
      </div>
    );
  }
}

Dropdown.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  menu: PropTypes.node,
  trigger: PropTypes.oneOf(['click', 'hover']),
};

Dropdown.defaultProps = {
  prefixCls: 'w-dropdown',
  trigger: 'hover',
  menu: null,
  visible: false,
};
