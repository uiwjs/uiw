import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, checked } = this.props;
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
}
