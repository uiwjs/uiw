import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Alert from '../alert';

const notifys = {};
const timer = {};

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifys: {},
    };
  }
  create(props) {
    const { placement, key } = props;
    if (!notifys[placement]) {
      notifys[placement] = {};
    }
    props.isOpen = false;
    notifys[placement][key] = props;
    if (props.duration) {
      timer[key] = setTimeout(() => {
        this.closed(key, placement);
      }, props.duration);
    }
    this.setState({
      notifys,
      placement,
    }, () => {
      notifys[placement][key].isOpen = true;
      this.setState({ notifys });
    });
  }
  closed(key, placement) {
    if (!key || !placement || !notifys[placement][key]) {
      return;
    }
    notifys[placement][key].isOpen = false;
    const props = notifys[placement][key];
    this.setState({ notifys }, () => {
      clearTimeout(timer[key]);
      delete timer[key];
      delete notifys[placement][key];
      props.willUnmount(props, notifys);
    });
  }
  render() {
    const { prefixCls } = this.props;
    const { placement } = this.state;
    return (
      <React.Fragment>
        {placement && Object.keys(this.state.notifys[placement]).map((key) => {
          const { description, isOpen, ...alertProps } = this.state.notifys[placement][key];
          if (alertProps.type === 'open') {
            delete alertProps.type;
          }
          return (
            <Alert
              className={classnames(prefixCls)}
              key={key}
              useButton={false}
              width={320}
              {...alertProps}
              usePortal={false}
              hasBackdrop={false}
              isOpen={isOpen}
              content={description}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

Container.propTypes = {
  prefixCls: PropTypes.string,
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
};

Container.defaultProps = {
  prefixCls: 'w-notify',
  placement: 'topRight',
};
