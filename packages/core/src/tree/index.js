import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';

const noop = () => undefined;

/**
 * a contains b
 * @param {Array} a
 * @param {Array} b
 */
const isContained = (a, b) => {
  if (!(a instanceof Array) || !(b instanceof Array)) return false;
  if (a.length < b.length) return false;
  const aStr = a.toString();
  for (let i = 0, len = b.length; i < len; i += 1) {
    if (aStr.indexOf(b[i]) === -1) return false;
  }
  return true;
};

const getChildKeys = (childs = [], result = []) => {
  childs.forEach((item) => {
    result.push(item.key);
    if (item.children && item.children.length > 0) {
      result = result.concat(getChildKeys(item.children));
    }
  });
  return result;
};

const getParentKeys = (childs = {}, result = []) => {
  if (childs.key) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentKeys(childs.parent, result);
  }
  return result;
};

const getParentSelectKeys = (childs = {}, selectedKeys = [], result = []) => {
  if (childs.key && childs.children && isContained(selectedKeys, getChildKeys(childs.children))) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentSelectKeys(childs.parent, selectedKeys, result);
  }
  return result;
};

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedKeys !== this.props.selectedKeys) {
      this.setState({ selectedKeys: nextProps.selectedKeys });
    }
    if (nextProps.selectedKeys !== this.props.selectedKeys) {
      this.setState({ selectedKeys: nextProps.selectedKeys });
    }
  }
  onItemSelected(item, evn) {
    const { onSelected, multiple, checkStrictly } = this.props;
    let { selectedKeys } = this.state;
    const key = selectedKeys.find(v => v === item.key);
    let selected = false;
    if (!key) {
      selected = true;
      selectedKeys.push(item.key);
    } else {
      selectedKeys = selectedKeys.filter(v => v !== item.key);
    }
    if (checkStrictly) {
      if (!key) {
        selectedKeys = selectedKeys.concat(getChildKeys(item.children).filter(val => selectedKeys.indexOf(val) === -1));
        selectedKeys = selectedKeys.concat(getParentSelectKeys(item, selectedKeys));
        selectedKeys = Array.from(new Set(selectedKeys)); // Remove duplicates.
      } else {
        selectedKeys = selectedKeys.filter(val => getChildKeys(item.children).indexOf(val) === -1);
        selectedKeys = selectedKeys.filter(val => getParentKeys(item.parent).indexOf(val) === -1);
      }
    }
    if (!multiple) {
      selectedKeys = !key ? [item.key] : [];
    }
    this.setState({ selectedKeys }, () => {
      onSelected(selectedKeys, item.key, selected, item, evn);
    });
  }
  onItemClick(item, evn) {
    const { onExpand } = this.props;
    let { openKeys } = this.state;
    const key = openKeys.find(v => v === item.key);
    const cls = evn.currentTarget.className.replace(/(\s)open/g, '');
    let expanded = false;
    if (!key) {
      openKeys.push(item.key);
      evn.currentTarget.className = classnames(cls, 'open');
      expanded = true;
    } else {
      openKeys = openKeys.filter(v => v !== item.key);
      evn.currentTarget.className = cls;
    }
    this.setState({ openKeys }, () => {
      onExpand(item.key, expanded, item, evn);
    });
  }
  renderTreeNode(data, level, parent) {
    const { prefixCls } = this.props;
    const { openKeys, selectedKeys } = this.state;
    let isOpen = false;

    if (parent && level !== 1) {
      isOpen = openKeys.indexOf(parent.key) > -1;
    }
    return (
      <ul
        className={classnames({
          [`${prefixCls}-open`]: level !== 1 && isOpen,
          [`${prefixCls}-close`]: level !== 1 && !isOpen,
        })}
      >
        {data.map((item, idx) => {
          item.parent = parent;
          return (
            <li key={idx}>
              <div className={classnames(`${prefixCls}-label`)}>
                <Icon
                  type="caret-right"
                  onClick={this.onItemClick.bind(this, item)}
                  className={classnames({ 'no-child': !item.children })}
                />
                <span
                  onClick={this.onItemSelected.bind(this, item)}
                  className={classnames(`${prefixCls}-title`, {
                    selected: selectedKeys.indexOf(item.key) > -1,
                  })}
                >
                  {item.label}
                </span>
              </div>
              {item.children && this.renderTreeNode(item.children, level + 1, item)}
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    const { prefixCls, className, data, autoExpandParent, defaultExpandAll, checkStrictly, onExpand, onSelected, ...elementProps } = this.props;
    const cls = classnames(className, `${prefixCls}`);
    return (
      <div className={cls} {...elementProps}>
        {this.renderTreeNode(data, 1)}
      </div>
    );
  }
}

Tree.propTypes = {
  prefixCls: PropTypes.string,
  data: PropTypes.array,
  defaultExpandAll: PropTypes.bool,
  checkStrictly: PropTypes.bool,
  multiple: PropTypes.bool,
  onExpand: PropTypes.func,
  onSelected: PropTypes.func,
};

Tree.defaultProps = {
  prefixCls: 'w-tree',
  data: [],
  defaultExpandAll: false,
  checkStrictly: false,
  multiple: false,
  onExpand: noop,
  onSelected: noop,
};
