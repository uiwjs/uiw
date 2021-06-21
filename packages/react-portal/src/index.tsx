import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export interface PortalProps {
  children?: React.ReactNode;
  /**
   * The HTML element that children will be mounted to.
   * @default document.body
   */
  container?: HTMLElement;
  /**
   * Callback invoked when the children of this `Portal` have been added to the DOM.
   * @deprecated v4.9.0+
   */
  onChildrenMount?: (portalElement: HTMLElement) => void;
  /** @deprecated v4.9.0+ */
  visible?: boolean;
}

export default function Portal(props: PortalProps) {
  const { container } = props;
  const defaultNode = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLElement | undefined>(container);

  useEffect(() => {
    return () => {
      if (defaultNode.current && containerRef.current) {
        containerRef.current.removeChild(defaultNode.current);
        defaultNode.current = undefined;
      }
    };
  }, []);

  if (!canUseDOM) {
    return null;
  }
  if (!containerRef.current) {
    containerRef.current = document.body;
  }
  if (!defaultNode.current) {
    defaultNode.current = document.createElement('div');
    containerRef.current.appendChild(defaultNode.current);
  }
  return ReactDOM.createPortal(props.children, defaultNode.current);
}
