import React, { Fragment, useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children?: React.ReactNode;
  /**
   * Callback invoked when the children of this `Portal` have been added to the DOM.
   */
  onChildrenMount?: (portalElement: HTMLElement) => void;
  /**
   * The HTML element that children will be mounted to.
   * @default document.body
   */
  container?: HTMLElement;
  visible?: boolean;
}

export interface PortalState {
  hasMounted: boolean;
}

export default function Portal(props: PortalProps = {}) {
  const {
    children,
    container: body = typeof document !== 'undefined'
      ? document.body
      : undefined,
    visible,
    onChildrenMount,
  } = props;
  const [hasMounted, setHasMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLDivElement>();
  useEffect(() => {
    // Component Will Unmount
    return () => {
      if (portalElement) {
        portalElement.remove();
      }
    };
  }, []);
  useMemo(() => {
    if (visible && body) {
      if (!portalElement) {
        let elm = document.createElement('div');
        setPortalElement(elm);
        body.appendChild(elm);
      }
    }
    if (!visible && portalElement) {
      setHasMounted(false);
      setPortalElement(undefined);
      const timer = setTimeout(() => {
        portalElement && portalElement.remove();
        clearTimeout(timer);
      });
    }
  }, [visible]);
  useMemo(() => {
    if (portalElement && !hasMounted) {
      setHasMounted(true);
      onChildrenMount && onChildrenMount(portalElement);
    }
  }, [portalElement, hasMounted]);

  // Only render `children` once this component has mounted in a browser environment,
  // so they are immediately attached to the DOM tree.
  // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
  if (typeof document === 'undefined' || !hasMounted) {
    return <Fragment />;
  } else {
    return ReactDOM.createPortal(children, portalElement!);
  }
}
