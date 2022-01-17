import React from 'react';

export default React.forwardRef<HTMLOptGroupElement, React.InputHTMLAttributes<HTMLOptGroupElement>>((props, ref) => (
  <optgroup {...props} ref={ref} />
));
