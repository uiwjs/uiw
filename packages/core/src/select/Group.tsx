import React from 'react';

const Group = ({ children, ...other }: React.InputHTMLAttributes<HTMLOptGroupElement>) => <optgroup {...other}>{children}</optgroup>;

export default Group;
