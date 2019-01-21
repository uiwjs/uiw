import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/** Detect if `React.createPortal()` API method does not exist. */
const cannotCreatePortal = !(typeof ReactDOM.createPortal === 'function');

export default class Portal extends React.Component {
  state = {
    hasMounted: false,
  }
  componentDidMount() {
    this.setState({ hasMounted: true }, this.props.onChildrenMount);
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }
  componentDidUpdate() {
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }
  render() {
    // Only render `children` once this component has mounted in a browser environment,
    // so they are immediately attached to the DOM tree.
    // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
    if (cannotCreatePortal || typeof document === "undefined" || !this.state.hasMounted) {
      return null;
    } else {
      return ReactDOM.createPortal(this.props.children, this.props.container);
    }
  }
  unstableRenderNoPortal() {
    ReactDOM.unstable_renderSubtreeIntoContainer(/* parentComponent */ this,
      this.props.children,
      // this.portalElement,
    );
  }
}

Portal.propTypes = {
  container: PropTypes.any,
};

Portal.defaultProps = {
  container: typeof document !== "undefined" ? document.body : null,
};
