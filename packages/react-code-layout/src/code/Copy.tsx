import React from 'react';
import copy from './../assets/copy.svg';
import checkSign from './../assets/checkSign.svg';
import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { CodeProps } from '../interface';

const Copy = (props: CodeProps) => {
  const { copyNodes = '' } = props;
  const copyRef = React.useRef<HTMLDivElement>(null);
  const copyTime = React.useRef<boolean>();
  const isCopy = React.useMemo(() => {
    return !!copyNodes;
  }, [copyNodes]);

  const onCopy = () => {
    if (copyTime.current) {
      return;
    }
    copyTime.current = true;
    const classList = copyRef.current?.getAttribute('class');
    copyRef.current?.setAttribute('class', `${classList} preview-button-copy-active`);
    copyTextToClipboard(copyNodes, function () {
      setTimeout(() => {
        copyTime.current = false;
        copyRef.current?.setAttribute('class', `${classList}`);
      }, 2000);
    });
  };

  const CopyRender = React.useMemo(() => {
    if (isCopy) {
      return (
        <div ref={copyRef} onClick={onCopy} className="preview-button-span preview-button-copy">
          <img alt="" className="copy" width={20} height={20} src={copy} />
          <img alt="" className="check" width={20} height={20} src={checkSign} />
        </div>
      );
    }
    return <React.Fragment />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCopy, copyNodes]);

  return <React.Fragment>{CopyRender}</React.Fragment>;
};

export default Copy;
