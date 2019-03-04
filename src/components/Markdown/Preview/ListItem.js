import React from 'react';
import classNames from 'classnames';

export default function ListItem({ children, checked }) {
  return (
    <li
      className={classNames({
        'task-list-item': checked === true || checked === false,
      })}
    >
      {(checked === true || checked === false) && (
        <input type="checkbox" className="task-list-item-checkbox" checked={checked} disabled={checked} />
      )}
      {children}
    </li>
  );
}
