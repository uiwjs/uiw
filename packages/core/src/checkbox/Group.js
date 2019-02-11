import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/group.less';

export default class CheckboxGroup extends React.Component {
  render() {
    const { prefixCls, className, name, value, onChange, ...other } = this.props;
    this.values = [];
    return (
      <div {...other} className={classnames(prefixCls, className)}>
        {React.Children.map(this.props.children, (element) => {
          value.includes(element.props.value) && this.values.push(element.props.value);
          return React.cloneElement(element, Object.assign({}, element.props, {
            name,
            checked: value.includes(element.props.value),
            onChange: (e) => {
              const checked = e.target.checked;
              if (!this.values.includes(element.props.value) && checked) {
                this.values.push(element.props.value);
              } else if (this.values.includes(element.props.value) && !checked) {
                this.values = this.values.filter(_item => _item !== element.props.value);
              }
              onChange(e, this.values);
            },
          }));
        })}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  prefixCls: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.array,
};

CheckboxGroup.defaultProps = {
  prefixCls: 'w-checkbox-group',
  value: [],
};
