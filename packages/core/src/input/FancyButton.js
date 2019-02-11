import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <span ref={ref} className={props.className}>
    {props.children}
  </span>
));

export default FancyButton;
