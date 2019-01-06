import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hoverCount: -1,
    };
  }
  onClick(e, key) {
    const { readOnly, onChange } = this.props;
    if (readOnly) return;
    this.setState({ value: key + 1 }, () => {
      onChange(e, key);
    });
  }
  onMouseLeave(e) {
    this.setState({ hoverCount: -1 });
  }
  onMouseMove(e, key) {
    const { onHoverChange } = this.props;
    const { hoverCount } = this.state;
    if (hoverCount !== key) {
      this.setState({ hoverCount: key }, () => {
        onHoverChange(e, key)
      });
    }
  }
  render() {
    const { prefixCls, count, value, className, character, readOnly, disabled, onHoverChange, color, ...other } = this.props;
    const cls = classnames(prefixCls, { disabled });
    return (
      <div
        className={cls}
        onMouseLeave={e => this.onMouseLeave(e)}
      >
        {Array(count).fill(null).map((_, idx) => {
          const props = {
            key: idx,
            className: classnames({
              ['star-on']: idx < this.state.value && this.state.hoverCount === -1,
              ['hover-on']: idx <= this.state.hoverCount,
              ['half-on']: parseInt(this.state.value, 10) === idx && Math.ceil(this.state.value) - 1 === idx,
            }),
          };
          if (!readOnly) {
            props.onClick = e => this.onClick(e, idx);
            props.onMouseMove = e => this.onMouseMove(e, idx);
          }

          if (color && (idx <= this.state.hoverCount || (idx < this.state.value && this.state.hoverCount === -1))) {
            props.style = { ...props.style, color };
          }

          return (
            <span {...props}>
              <span className={classnames(`${prefixCls}-hight`)}>{character}</span>
              <span className={`${prefixCls}-bg`}>{character}</span>
            </span>
          );
        })}
      </div>
    );
  }
}

Rate.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.number,
  readOnly: PropTypes.bool,
  count: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  character: PropTypes.node,
  onHoverChange: PropTypes.func,
  onChange: PropTypes.func,
};

Rate.defaultProps = {
  prefixCls: 'w-rate',
  value: 0,
  count: 5,
  character: '★',
  readOnly: false,
  onHoverChange() { },
  onChange() { },
};
