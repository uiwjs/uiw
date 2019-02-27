import React from 'react';

const Group = ({ children, ...other }) => <optgroup {...other}>{children}</optgroup>;

export default Group;
