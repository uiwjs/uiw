import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Modal from '../modal';
import './style/index.less';

export default class Alert extends React.Component {
  render() {
    const { prefixCls, className, ...other } = this.props;
    return (
      <Modal {...other} className={classnames(prefixCls, className)}>
        {this.props.children}
      </Modal>
    );
  }
}

Alert.propTypes = {
  prefixCls: PropTypes.string,
  width: PropTypes.number,
};

Alert.defaultProps = {
  prefixCls: 'w-alert',
  width: 400,
};
