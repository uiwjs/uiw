import React from 'react';
import { PropTypes } from '../utils/';
import MixinComponent from './MixinComponent';

export default class MenuItemGroup extends MixinComponent {
  constructor(props) {
    super(props);
    this.instanceType = 'SubMenu';
    this.state = {
      active: false,
    };
  }
  render() {
    const { prefixCls, style, className, title, children, ...resetProps } = this.props;
    const { inlineIndent, mode } = this.menu().props;
    const styles = {};
    if (mode === 'inline') {
      styles.paddingLeft = inlineIndent;
    }
    return (
      <li className={this.classNames(`${prefixCls}`, className)} {...resetProps} >
        <div className={`${prefixCls}-title`} style={{ ...style, ...styles }}>{title}</div>
        <ul>
          {React.Children.map(children, (child) => {
            const childProps = {};
            return React.cloneElement(child, childProps);
          })}
        </ul>
      </li>
    );
  }
}

MenuItemGroup.propTypes = {
  prefixCls: PropTypes.string,
};

MenuItemGroup.defaultProps = {
  prefixCls: 'w-menu-item-group',
};
