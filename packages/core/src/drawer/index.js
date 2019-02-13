import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Overlay from '../overlay';
import Icon from '../icon';
import Button from '../button';
import './style/index.less';

export default class Drawer extends React.PureComponent {
  render() {
    const { prefixCls, className, style, placement, size, title, footer, icon, isCloseButtonShown, ...overlayProps } = this.props;
    const cls = classnames(className, prefixCls, `${placement}`);
    const styl = { ...style, [/^(top|bottom)$/.test(placement) ? 'height' : 'width']: size };
    return (
      <Overlay className={cls} {...overlayProps}>
        <div className={`${prefixCls}-wrapper`} style={styl}>
          {(title || icon) && (
            <div className={`${prefixCls}-header`}>
              {icon && <Icon type={icon} />}
              {title && <h4>{title}</h4>}
              {title && isCloseButtonShown && <Button basic onClick={this.props.onClose} icon="close" type="light" />}
            </div>
          )}
          <div className={`${prefixCls}-body`}>
            <div className={`${prefixCls}-body-inner`}>
              {this.props.children}
            </div>
          </div>
          {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
        </div>
      </Overlay>
    );
  }
}

Drawer.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  isOpen: PropTypes.bool,
  icon: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  isCloseButtonShown: PropTypes.bool,
  size: PropTypes.number,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

Drawer.defaultProps = {
  prefixCls: 'w-drawer',
  placement: 'right',
  isCloseButtonShown: true,
  size: 260,
};
