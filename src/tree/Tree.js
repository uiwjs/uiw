import React from 'react';
import { Component, PropTypes } from '../utils/';
import TreeNode from './TreeNode';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的
      selectedKeys: props.selectedKeys || [],
    };
  }
  getChildContext() {
    return { component: this };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedKeys !== this.props.selectedKeys) {
      this.setState({ selectedKeys: nextProps.selectedKeys });
    }
  }
  setSelecteKeys = (keys, callback) => {
    this.setState({
      selectedKeys: keys,
    }, () => {
      if (callback) callback();
    });
  }
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    const cls = this.classNames(className, `${prefixCls}`);
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
  showLine: false,
  data: [],
  // 是否默认展开所有节点
  defaultExpandAll: false,
  option: {
    children: 'children',
    label: 'label',
  },
  onExpand() { },
  onSelect() { },
};
Tree.propTypes = {
  prefixCls: PropTypes.string,
  selectedKeys: PropTypes.array,
  showLine: PropTypes.bool,
  data: PropTypes.array,
  defaultExpandAll: PropTypes.bool,
  option: PropTypes.shape({
    children: PropTypes.string,
    label: PropTypes.string,
  }),
  onExpand: PropTypes.func,
  onSelect: PropTypes.func,
};

Tree.childContextTypes = {
  component: PropTypes.any,
};

