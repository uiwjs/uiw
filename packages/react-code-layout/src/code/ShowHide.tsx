import React from 'react';
import expand from './../assets/expand.svg';
import unexpand from '../assets/unexpand.svg';

export interface ShowHideProps {
  show: boolean;
  onClick: (v: boolean) => void;
}
const ShowHide = (props: ShowHideProps) => {
  const { show, onClick } = props;
  return (
    <React.Fragment>
      <div className="preview-button-span preview-code-exand-unexpand-icon" onClick={() => onClick(!show)}>
        <img alt="" width={20} height={20} src={expand} className={`preview-code-exand-unexpand-icon-${!show}`} />
        <img alt="" width={20} height={20} src={unexpand} className={`preview-code-exand-unexpand-icon-${show}`} />
      </div>
    </React.Fragment>
  );
};

export default ShowHide;
