import React from 'react';
import { Component, PropTypes } from '../utils/';
import TreeNode from './TreeNode';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的
      selectedKeys: props.selectedKeys || []
    }
  }
  getChildContext() {
    return { component: this };
  }
  setSelecteKeys = (keys, callback) => {
    this.setState({
      selectedKeys: keys
    }, () => {
      callback && callback()
    })
  }
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
  selectedKeys: [],
}
Tree.propTypes = {
  prefixCls: PropTypes.string,
  selectedKeys: PropTypes.array,
}

Tree.childContextTypes = {
  component: PropTypes.any
};

