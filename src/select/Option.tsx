import React from 'react';

const Option = ({ children, ...other }: React.InputHTMLAttributes<HTMLOptionElement>) => <option {...other}>{children}</option>;

export default Option;
