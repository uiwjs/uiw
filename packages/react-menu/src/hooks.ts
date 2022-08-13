import { createContext, useContext } from 'react';
import { OverlayTriggerRef } from '@uiw/react-overlay-trigger';

export const MenuContext = createContext<{
  nodeDoms: OverlayTriggerRef[];
  onUpdateNode: Function;
  onUpdateSize: Function;
}>({
  nodeDoms: [],
  onUpdateNode: () => {},
  onUpdateSize: () => {},
});

export const useMenuContext = () => {
  const { nodeDoms } = useContext(MenuContext);

  const onUpdateNode = (node: OverlayTriggerRef) => {
    nodeDoms.push(node);
  };
  const onUpdateSize = () => {
    nodeDoms.forEach((node) => {
      if (node.overlayDom.current?.parentElement) {
        const height = node.overlayDom.current!.getBoundingClientRect().height + 'px';
        node.overlayDom.current.parentElement.style.height = height;
      }
    });
  };
  return { onUpdateNode, onUpdateSize, nodeDoms };
};
