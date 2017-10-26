import React from 'react';
import { Component, PropTypes } from '../utils/';
import Checkbox from '../checkbox/';

export default class Tbody extends Component {
  static contextTypes = {
    component: PropTypes.any
  }
  constructor(props) {
    super(props);
    this.renderTbodyTd = this.renderTbodyTd.bind(this)
  }
  parent() {
    return this.context.component;
  }
  getRenders(columns, headelm = {}) {
    for (let i = 0; i < columns.length; i++) {
      if (columns[i] && columns[i].key && (!columns[i].children || columns[i].children.length < 1)) {
        headelm[columns[i].key] = { ...columns[i] };
        let method = ['render', 'onCellClick', 'className']
        for (let a in method) {
          if (method[a] in columns[i]) {
            headelm[columns[i].key][method[a]] = columns[i][method[a]];
          }
        }
      }
      if (columns[i].children && columns[i].children.length) {
        this.getRenders(columns[i].children, headelm);
      }
    }
    return headelm;
  }
  jsonToArray(json) {
    let newarr = []
    for (let a in json) {
      newarr.push(json[a])
    }
    return newarr
  }
  // rownum 第几条数据
  // item 每条数据的详细内容
  // columns 所有列信息
  renderTbodyTd(item, rownum) {
    const { columns = [], cloneElement } = this.props;
    const { ischecked, rowsChecked, rowsDisabled } = this.parent().state;
    var renders = this.getRenders(columns);
    let itemArr = this.jsonToArray(item);
    let fixedItems = [], items = [], currentItem = [];

    for (let i = 0; i < columns.length; i++) {
      let keyname = columns[i].key
      let attri = {}
      if (renders[keyname] && renders[keyname].onCellClick) {
        attri.onClick = renders[keyname].onCellClick.bind(this, item[keyname])
      }
      if (renders[keyname] && renders[keyname].className) {
        attri.className = renders[keyname].className
      }
      if (ischecked && i === 0) {
        attri.className = "_select"
        items = (
          <td key={`${i + 1}`} {...attri}>
            <Checkbox
              checked={rowsChecked[rownum] ? true : false}
              disabled={rowsDisabled[rownum] ? true : false}
              onChange={(e, checked) => {
                if (checked === false || checked === true) {
                  this.props.onRowSelection(item, rownum, checked, e)
                }
              }}>
            </Checkbox>
          </td>
        )
      } else {
        let dataIndex = columns[i].dataIndex, idx = ischecked ? i - 1 : i;
        items = (
          <td key={`${i + 1}`} {...attri}>
            {dataIndex ? (renders[keyname] && renders[keyname].render) ? renders[keyname].render(item[keyname], item, i) : item[keyname] :
              (renders[keyname] && renders[keyname].render) ? renders[keyname].render(itemArr[idx], itemArr, idx) : itemArr[idx]
            }
          </td>
        )
      }

      if (cloneElement === "left") {
        if ((ischecked && i === 0) || (columns[i] && columns[i].fixed === "left")) {
          fixedItems.push(items);
        }
      } else if (cloneElement === "right") {
        if (columns[i] && columns[i].fixed === "right") {
          fixedItems.push(items);
        }
      } else {
        currentItem.push(items)
      }

    }
    if (cloneElement === "left" || cloneElement === "right") {
      return fixedItems;
    } else {
      return currentItem;
    }
  }
  onMouseOver(ty, idx) {
    this.props.onTrHover(ty, idx);
  }
  render() {
    const { data, trHoverClassName, prefixCls } = this.props;
    return (
      <tbody>
        {data.map((item, index) => {
          return (
            <tr
              className={this.classNames({
                [`${prefixCls}-tr-hover`]: trHoverClassName[0] === index
              })}
              onMouseEnter={() => this.onMouseOver('enter', index)}
              onMouseLeave={() => this.onMouseOver('leave', index)}
              key={index}>
              {this.renderTbodyTd(item, index)}
            </tr>
          )
        })}
      </tbody>
    )
  }
}

Tbody.defaultProps = {
  prefixCls: 'w-table',
  columns: []
};
Tbody.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  data: PropTypes.array,
}