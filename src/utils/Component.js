import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Component extends React.Component {
  classNames(...args) {
    return classnames(args);
  }
}

Component.propTypes = {
  className: PropTypes.string,
};
