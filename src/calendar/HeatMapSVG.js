import React from 'react';
import { Component, PropTypes, findDOMNode } from '../utils/';

export default class HeatMapSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    // 根据宽度来生成多少天的图形
    const { days } = this.parent().props;
    const $this = findDOMNode(this);
    const width = $this.parentNode.offsetWidth;
    const col = parseInt(width / 16, 10);
    const daycount = col * 7 - 14;
    this.setState({
      days: days || daycount
    })
  }
  // 返回不同深浅的颜色
  isExistColor(num) {
    const { panelColors } = this.parent().props;
    let color = '', keys = [], nums = Object.keys(panelColors);
    // 转换成数字
    for (let a = 0; a < nums.length; a++) {
      keys.push(parseInt(nums[a], 10));
    }
    // 排序
    keys = this.numberSort(keys);
    // 判断使用什么颜色
    for (let a = 0; a < keys.length; a++) {
      if (keys[a] > num) {
        color = panelColors[keys[a]];
        break;
      }
      color = panelColors[keys[a]];
    }
    return color;
  }
  onClick(e, curdate, curdt) {
    const { onClick } = this.parent().props;
    onClick(e, curdate, curdt)
  }

  onMouseOver(e, curdatestr, curdt, refname) {
    this.parent().onMouseOver(e, curdatestr, curdt);
  }
  isCurrentData(date) { // 判断传进来的数据，并返回颜色
    const { values, panelColors } = this.parent().props;
    let curdt = {};
    for (var i = 0; i < values.length; i++) {
      let curdate = new Date(values[i]['date']);
      curdate = `${curdate.getFullYear()}/${curdate.getMonth() + 1}/${curdate.getDate()}`;
      if (curdate === date) {
        curdt = values[i];
        break;
      }
    }
    curdt['date'] = date;
    if (curdt.count && curdt.count > 0) {
      curdt.color = this.isExistColor(curdt.count);
    } else {
      curdt.color = panelColors[0] || '#EBEDF0';
    }
    return curdt
  }
  renderPanelColors() {
    let width = 14, height = 14, col = 16, rectPanelColors = [];
    const { panelColors } = this.parent().props;
    // 颜色说明栏
    let nums = Object.keys(panelColors);
    for (let i = 0; i < nums.length; i++) {
      let xl = i * col;
      rectPanelColors.push(<rect key={i} width={width} height={height} x={xl} y="0" fill={panelColors[nums[i]]}></rect>)
    }
    return rectPanelColors;
  }
  parent() {
    return this.context.component;
  }
  // 排序 比较函数
  numberSort(keys) {
    return keys.sort((x, y) => {//比较函数
      if (x < y) return -1;
      else if (x > y) return 1;
      else return 0;
    })
  }
  renderPanelHeader(ty) {
    const { endDate, weekLables, monthLables } = this.parent().props;
    let { days } = this.state;
    let width = 14, height = 14, dayDate = [], oneday = 86400000;
    let timestamp = endDate.getTime();
    let curweek = new Date(timestamp).getDay();
    days = days + curweek + 1;

    for (let i = 0; i < days; i++) {
      dayDate.push(timestamp - (oneday * i));
    }
    dayDate = this.numberSort(dayDate);
    // 日历
    var rectdays = [], rectweeks = [], rectMonth = [], col = 16;
    for (let i = 0; i < days; i++) {
      let xl = parseInt(i / 7, 10) * col;
      let yl = 21 + parseInt(i % 7, 10) * col;
      let curdate = new Date(dayDate[i]);
      let curdatestr = `${curdate.getFullYear()}/${curdate.getMonth() + 1}/${curdate.getDate()}`;
      let curdt = this.isCurrentData(curdatestr);
      // console.log("curdt", curdt)
      // 日方块
      rectdays.push(<rect
        data-date={curdatestr}
        key={i}
        fill={curdt.color}
        x={col + xl}
        y={yl}
        onClick={(e) => this.onClick(e, curdatestr, curdt)}
        onMouseOver={(e) => this.onMouseOver(e, curdatestr, curdt)}
        width={width} height={height}></rect>);
      // 周标题
      if (Object.keys(weekLables).indexOf(i.toString()) > -1 && i < 7) {
        rectweeks.push(<text key={i} x={xl + 7} y={yl} width={width + 10} height={height}>{weekLables[i]}</text>);
      }
      // 月标题
      if (parseInt(curdate.getDate(), 10) === 1) {
        rectMonth.push(<text key={i} x={xl + 12}> {monthLables[parseInt(curdate.getMonth(), 10)]} </text>)
      }
    }
    if (ty === 'week') {
      return rectweeks
    } else if (ty === 'month') {
      return rectMonth
    } else if (ty === 'day') {
      return rectdays
    }
  }
  render() {
    const { prefixCls, className } = this.props;
    const cls = this.classNames(prefixCls, className);
    return (
      <svg className={cls} width={`100%`} height="155px">
        <g className={`${prefixCls}-week`} transform="translate(0, 10)">
          {this.renderPanelHeader('week')}
        </g>
        <g className={`${prefixCls}-month`} transform={`translate(16, 14)`}>
          {this.renderPanelHeader('month')}
        </g>
        <g transform="translate(16, 138)"> {this.renderPanelColors()} </g>
        <g onMouseLeave={() => this.parent().onMouseLeave()}>{this.renderPanelHeader('day')}
        </g>
      </svg>
    );
  }
}

HeatMapSVG.propTypes = {
  prefixCls: PropTypes.string,
}

HeatMapSVG.defaultProps = {
  prefixCls: "w-heatmap",
}

HeatMapSVG.contextTypes = {
  component: PropTypes.any
};