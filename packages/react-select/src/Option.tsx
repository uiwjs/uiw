import React from 'react';

export default React.forwardRef<
  HTMLOptionElement,
  React.InputHTMLAttributes<HTMLOptionElement>
>((props, ref) => <option {...props} ref={ref} />);
