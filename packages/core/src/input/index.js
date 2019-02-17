import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import FancyButton from './FancyButton';
import './style/input.less';

// const FancyButton = React.forwardRef((props, ref) => (
//   <span ref={ref} className={props.className}>
//     {props.children}
//   </span>
// ));

export default class Input extends React.Component {
  static defaultProps = {
    prefixCls: 'w-input',
    preIcon: null,
    type: 'text',
    size: 'default',
  }
  constructor(props) {
    super(props);
    this.addonRef = React.createRef();
  }
  componentDidMount() {
    if (this.addonRef.current && this.input) {
      const input = window.getComputedStyle(this.addonRef.current, null);
      this.input.style.paddingRight = `${this.addonRef.current.clientWidth + parseInt(input.right, 10) * 2}px`;
    }
  }
  render() {
    const { prefixCls, className, style, size, type, preIcon, addonAfter, ...props } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-addon`]: addonAfter,
      disabled: this.props.disabled,
    });
    return (
      <div className={cls} style={style}>
        <Icon type={preIcon} />
        <input
          ref={node => this.input = node}
          type={type}
          {...props}
          className={classnames(`${prefixCls}-inner`)}
        />
        {addonAfter && (
          <FancyButton className={`${prefixCls}-addon-after`} ref={this.addonRef}> {addonAfter} </FancyButton>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
};
