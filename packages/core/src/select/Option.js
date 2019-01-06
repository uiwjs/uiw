import React from 'react';

const Option = ({ children, ...other }) => <option {...other}>{children}</option>;

export default Option;
