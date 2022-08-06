import React, { useState } from 'react';
import Popover, { PopoverProps } from './';
// import './style/index.less';
import Button from '@uiw/react-button';
import Icon from '@uiw/react-icon';

interface Confirm {
  trigger?: PopoverProps['trigger'];
  placement?: PopoverProps['placement'];
  children?: React.ReactNode;
  visibleArrow?: PopoverProps['visibleArrow'];
  onConfirm?: () => void;
  confirmText?: string;
  title?: React.ReactNode;
  cancelText?: string;
}

export default function Confirm(props: Confirm) {
  const {
    trigger = 'click',
    placement = 'top',
    confirmText = 'Yes',
    title,
    cancelText = 'No',
    visibleArrow,
    children,
    onConfirm,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      isOpen={isOpen}
      visibleArrow={visibleArrow}
      content={
        <div style={{ padding: '12px 16px', position: 'relative' }}>
          <Icon
            type="information"
            style={{ position: 'absolute', top: 13.5, fontSize: 14, transform: 'rotate(180deg)', color: '#faad14' }}
          />
          <div style={{ paddingLeft: 20 }}>
            <div style={{ fontSize: 14 }}>{title}</div>
            <div style={{ position: 'relative', bottom: 0, marginTop: 12, display: 'flex', justifyContent: 'end' }}>
              <Button size="small" onClick={() => setIsOpen(false)}>
                {cancelText}
              </Button>
              <Button
                size="small"
                type="primary"
                style={{ marginLeft: 10 }}
                onClick={() => {
                  onConfirm?.();
                  setIsOpen(false);
                }}
              >
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      }
      trigger={trigger}
      placement={placement}
    >
      <div onClick={() => setIsOpen(true)}>{children}</div>
    </Popover>
  );
}
