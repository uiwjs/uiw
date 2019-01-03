import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from '../grid/Row';
import Col from '../grid/Col';
import './style/form-item.less';

export default class FormItem extends React.PureComponent {
  renderItem
  render() {
    const { prefixCls, className, style, label, labelFor, labelClassName, labelStyle, help, inline, hasError } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-error`]: hasError
    });
    const labelCls = classnames('w-form-label', labelClassName);
    if (inline) {
      return (
        <div className={cls} style={style}>
          <Row>
            <Col fixed className={labelCls}><label style={labelStyle} htmlFor={labelFor}>{label}</label></Col>
            <Col className="w-form-row">
              {this.props.children}
            </Col>
          </Row>
          {help && (
            <Row>
              <Col className="w-form-help">{help}</Col>
            </Row>
          )}
        </div>
      );
    }
    return (
      <div className={cls} style={style}>
        {label && <label className={labelCls} style={labelStyle} htmlFor={labelFor}>{label}</label>}
        <Col className="w-form-row">{this.props.children}</Col>
        {help && <div className="w-form-help">{help}</div>}
      </div>
    );
  }
}

FormItem.propTypes = {
  prefixCls: PropTypes.string,
  inline: PropTypes.bool,
  hasError: PropTypes.bool,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  labelClassName: PropTypes.string,
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

FormItem.defaultProps = {
  prefixCls: 'w-form-item',
};
