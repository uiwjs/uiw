import React from 'react';
import ReactDOM from 'react-dom';

export interface IPortalProps {
  /**
   * Callback invoked when the children of this `Portal` have been added to the DOM.
   */
  onChildrenMount?: () => void;
  /**
   * The HTML element that children will be mounted to.
   * @default document.body
   */
  container?: HTMLElement;
}

export interface IPortalState {
  hasMounted: boolean;
}

/** Detect if `React.createPortal()` API method does not exist. */
const cannotCreatePortal = !(typeof ReactDOM.createPortal === 'function');

export default class Portal extends React.Component<IPortalProps> {
  public static defaultProps: IPortalProps = {
    container: typeof document !== "undefined" ? document.body : undefined,
  };
  public state: IPortalState = {
    hasMounted: false,
  }
  private portalElement!: HTMLElement;
  public componentDidMount() {
    if (!this.props.container) {
      return;
    }
    this.portalElement = this.createContainerElement();
    this.props.container.appendChild(this.portalElement);
    this.setState({ hasMounted: true }, this.props.onChildrenMount);
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }
  public componentDidUpdate() {
    if (cannotCreatePortal) {
      this.unstableRenderNoPortal();
    }
  }

  public componentWillUnmount() {
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
    if (cannotCreatePortal || typeof document === 'undefined' || !this.state.hasMounted) {
      return null;
    } else {
      return ReactDOM.createPortal(this.props.children, this.portalElement);
    }
  }
  private createContainerElement() {
    const container = document.createElement("div");
    return container;
  }
  unstableRenderNoPortal() {
    ReactDOM.unstable_renderSubtreeIntoContainer(/* parentComponent */ this,
      <div>{this.props.children}</div>,
      this.portalElement,
    );
  }
}

