import React, { Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  render() {
    const { prefixCls,className,...others } = this.props;
    return (
      <ul>

      </ul>
    )
  }
}

Menu.propTypes = {
  prefixCls:PropTypes.string,
}

Menu.defaultProps = {
  prefixCls: "w-row",
}
