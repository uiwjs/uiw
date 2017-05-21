import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types';
import "./style/index.less";

export default class Transition extends Component{
  static defaultProps = {
  };
  static propTypes = {
    type: PropTypes.string
  }
  render(){
    const { type, children } = this.props;

    return(
      <CSSTransitionGroup
        transitionName={`example`}
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionEnterTimeout={2000}
        transitionLeave={false}
        transitionLeaveTimeout={2000}
        >
        {children}
      </CSSTransitionGroup>
    )
  }
}