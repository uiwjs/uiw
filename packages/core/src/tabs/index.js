import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Pane from './Pane';
import './style/index.less';

export default class Tabs extends React.Component {
  static Pane = Pane;
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.activeKey,
      slideStyle: { width: 0, left: 0 },
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.calcSlideStyle();
    }
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey,
      }, () => {
        this.calcSlideStyle();
      });
    }
  }
  componentDidMount() {
    this.calcSlideStyle();
  }
  calcSlideStyle() {
    const { slideStyle } = this.state;
    if (this.activeItem && this.props.type === 'line') {
      const styl = {
        width: this.activeItem.clientWidth,
        left: this.activeItem.offsetLeft,
      };
      this.setState({ 
        slideStyle: { ...slideStyle, ...styl}
      });
    }
  }
  onTabClick(item, key, e) {
    this.setState({
      activeKey: key,
    }, () => {
      this.calcSlideStyle();
      this.props.onTabClick(key, item, e);
    });
  }
  render() {
    const { prefixCls, className, children, type, activeKey, onTabClick, ...elementProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
    });
    return (
      <div className={cls} {...elementProps}>
        <div className={`${prefixCls}-bar`}>
          <div className={`${prefixCls}-nav`}>
            {React.Children.map(children, (item, key) => {
              const props = {
                key, className: classnames(`${prefixCls}-item`, {
                  [`active`]: item.key === this.state.activeKey,
                  [`disabled`]: item.props.disabled,
                }),
                children: item.props.label,
              }
              if (item.props && !item.props.disabled) props.onClick = this.onTabClick.bind(this, item, item.key);
              return (
                <div
                  ref={(node) => { if (item.key === this.state.activeKey) this.activeItem = node; }}
                  {...props}
                />
              );
            })}
          </div>
          <div style={this.state.slideStyle} className={`${prefixCls}-slide`}/>
        </div>
        {React.Children.map(children, (item, idx) => {
          if (this.state.activeKey !== item.key) {
            return null;
          }
          return React.cloneElement(item, Object.assign({}, item.props, {}));
        })}
      </div>
    )
  }
}

Tabs.propTypes = {
  prefixCls: PropTypes.string,
  activeKey: PropTypes.string,
  onTabClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'line', 'card']),
};

Tabs.defaultProps = {
  prefixCls: 'w-tabs',
  onTabClick() { },
  type: 'default',
};
