import React from 'react';
import { Component, PropTypes } from '../utils/';
import TreeNode from './TreeNode';

export default class Tree extends Component {
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    const cls = this.classNames(className, `${prefixCls}`)
    return (
      <div className={cls}>
        <TreeNode level={1} {...resetProps} />
      </div>
    );
  }
}


Tree.defaultProps = {
  prefixCls: 'w-tree',
}
Tree.propTypes = {
  prefixCls: PropTypes.string,
}
