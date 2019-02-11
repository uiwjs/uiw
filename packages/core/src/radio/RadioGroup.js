import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/group.less';

export default class RadioGroup extends React.Component {
  render() {
    const { prefixCls, className, name, value, onChange, ...other } = this.props;
    return (
      <div {...other} className={classnames(prefixCls, className)}>
        {React.Children.map(this.props.children, (element) => {
          return React.cloneElement(element, Object.assign({}, element.props, {
            checked: element.props.value === value,
            name,
            onChange,
          }));
        })}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  prefixCls: PropTypes.string,
};

RadioGroup.defaultProps = {
  prefixCls: 'w-radio-group',
};
