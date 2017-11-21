import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon';

export default class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 是否展开
      showTree: props.defaultExpandAll,
      // 默认关闭的Item
      closedItem: props.defaultExpandAll ? [] : [...props.data],
      // 默认选中的
      // selectedKeys: props.selectedKeys || [],
    }
  }
  parent() {
    return this.context.component;
  }
  // 获取关闭节点的数据
  getCloseItemIndex(item, closedItem) {
    let idx = -1;
    for (let i = 0; i < closedItem.length; i++) {
      if (item.key === closedItem[i].key) {
        idx = i;
      }
    }
    return idx;
  }
  onShowTree(item, e) {
    const { onExpand, option } = this.props;
    if (!item[option.children]) return;
    let { closedItem } = this.state;
    let idx = this.getCloseItemIndex(item, closedItem)
    if (idx > -1) {
      closedItem.splice(idx, 1)
    } else {
      closedItem.push(item)
    }
    this.setState({
      closedItem
    }, () => {
      onExpand(item.key, idx > -1, item, this)
    })
  }
  onSelect(item, e) {
    const { onSelect } = this.props;
    const { selectedKeys } = this.parent().state;
    const { setSelecteKeys } = this.parent();
    setSelecteKeys(selectedKeys.filter((key) => key === item.key).length > 0 ? [] : [item.key], () => {
      onSelect(item.key, item, e)
    })
  }
  render() {
    const { prefixCls, data, showTree, showLine, level, option } = this.props;
    const { closedItem } = this.state;
    const { selectedKeys } = this.parent().state;
    const ulCls = level > 1 ? `${prefixCls}-${showTree ? "open" : "close"}` : null;
    return (
      <ul className={this.classNames(`${prefixCls}-item`, ulCls, {
        [`${prefixCls}-show-line`]: showLine
      })}>
        {
          data.map((item, idx) => {
            let childs = item[option.children];
            let isChild = childs && childs.length > 0;
            let props = Object.assign({}, this.props, { parent: this });
            let index = this.getCloseItemIndex(item, closedItem);

            props.showTree = index > -1 ? false : true;
            props.level = level + 1;

            let iconname = 'caret-down';
            if (showLine && isChild) {
              iconname = index > -1 ? "plus-square-o" : "minus-square-o";
            }
            if (showLine && !isChild) {
              iconname = "file-text";
            }
            return (
              <li key={idx}>
                <div className={`${prefixCls}-title`}>
                  <Icon onClick={this.onShowTree.bind(this, item)} className={this.classNames(`${prefixCls}-icon`, {
                    "no-child": !isChild && !showLine,
                    "is-close": isChild && index > -1,
                  })} type={iconname}></Icon>
                  <span
                    onClick={this.onSelect.bind(this, item)}
                    className={this.classNames(`${prefixCls}-inner`, {
                      [`${prefixCls}-selected`]: selectedKeys.filter((key) => key === item.key).length > 0
                    })}>
                    {item[option.label]}
                  </span>
                </div>
                {isChild && <TreeNode {...props} data={childs} />}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

TreeNode.defaultProps = {
  prefixCls: 'w-tree',
  data: [],
  option: {
    children: "children",
    label: "label",
  },
  // 是否默认展开所有节点
  defaultExpandAll: false,
  showLine: false,
  onExpand() { },
  onSelect() { }
}
TreeNode.propTypes = {
  prefixCls: PropTypes.string,
  onExpand: PropTypes.func,
  onSelect: PropTypes.func,
  data: PropTypes.array,
  defaultExpandAll: PropTypes.bool,
  showLine: PropTypes.bool,
  option: PropTypes.shape({
    children: PropTypes.string,
    label: PropTypes.string,
  }),
}

TreeNode.contextTypes = {
  component: PropTypes.any
};
