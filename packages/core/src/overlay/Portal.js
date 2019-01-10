import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/** Detect if `React.createPortal()` API method does not exist. */
const cannotCreatePortal = !(typeof ReactDOM.createPortal === 'function');

export default class Portal extends React.Component {
  state = {
    hasMounted: false,
  }
  componentWillMount() {
    this.portalElement = this.createContainerElement();
  }
  componentDidMount() {
    this.props.container.appendChild(this.portalElement);
    this.setState({ hasMounted: true }, this.props.onChildrenMount);
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }
  componentWillUnmount() {
    if (this.portalElement != null) {
      if (cannotCreatePortal) {
        ReactDOM.unmountComponentAtNode(this.portalElement);
      }
      this.portalElement.remove();
    }
  }
  render() {
    // Only render `children` once this component has mounted in a browser environment,
    // so they are immediately attached to the DOM tree.
    // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
    if (cannotCreatePortal || typeof document === "undefined" || !this.state.hasMounted) {
      return null;
    } else {
      return ReactDOM.createPortal(this.props.children, this.portalElement);
    }
  }
  createContainerElement() {
    const { prefixCls, className } = this.props;
    const container = document.createElement("div");
    container.className = classnames(prefixCls, className);
    return container;
  }
  unstableRenderNoPortal() {
    ReactDOM.unstable_renderSubtreeIntoContainer(/* parentComponent */ this,
      this.props.children,
      this.portalElement,
    );
  }
}

Portal.propTypes = {
  prefixCls: PropTypes.string,
  container: PropTypes.any,
};

Portal.defaultProps = {
  prefixCls: 'w-portal',
  container: typeof document !== "undefined" ? document.body : null,
};
