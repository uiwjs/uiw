import React from 'react';
import { Component, PropTypes, findDOMNode } from '../utils/';

export default class HeatMapSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
    }
    this.onClick = this.onClick.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }
  componentDidMount() {
    // 根据宽度来生成多少天的图形
    const { days, rectWidth } = this.parent().props;
    const $this = findDOMNode(this);
    const width = $this.parentNode.offsetWidth;
    const col = parseInt(width / (rectWidth + 2), 10);
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
  onMouseLeave(e) {
    this.rect = null
    this.parent().hideTooltip();
  }
  onMouseMove(e, curdatestr, curdt) {
    if (e.target.tagName === 'rect' && e.target.dataset && e.target.dataset.date) {
      if (this.rect !== e.target) {
        this.rect = e.target;
        this.parent().onMouseOver(e, e.target.dataset.date, curdt)
      }
    }
  }
  renderPanelColors() {
    const { panelColors, rectWidth, rectHeight } = this.parent().props;
    let col = rectWidth + 2, rectPanelColors = [];
    // 颜色说明栏
    let nums = Object.keys(panelColors);
    for (let i = 0; i < nums.length; i++) {
      let xl = i * col;
      rectPanelColors.push(<rect key={i} width={rectWidth} height={rectHeight} x={xl} y="0" fill={panelColors[nums[i]]}></rect>)
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
    const { endDate, weekLables, rectWidth, rectHeight, monthLables } = this.parent().props;
    let { days } = this.state;
    let dayDate = [], oneday = 86400000;
    let timestamp = endDate.getTime();
    let curweek = new Date(timestamp).getDay();
    days = days + curweek + 1;

    for (let i = 0; i < days; i++) {
      dayDate.push(timestamp - (oneday * i));
    }
    dayDate = this.numberSort(dayDate);
    // 日历
    var rectdays = [], rectweeks = [], rectMonth = [], col = rectWidth + 2;
    for (let i = 0; i < days; i++) {
      let xl = parseInt(i / 7, 10) * col;
      let yl = 21 + parseInt(i % 7, 10) * col;
      let curdate = new Date(dayDate[i]);
      let curdatestr = `${curdate.getFullYear()}/${curdate.getMonth() + 1}/${curdate.getDate()}`;
      let curdt = this.isCurrentData(curdatestr);
      // 日方块
      rectdays.push(<rect
        data-date={curdatestr}
        key={i}
        fill={curdt.color}
        x={col + xl}
        y={yl}
        onClick={(e) => this.onClick(e, curdatestr, curdt)}
        onMouseMove={(e) => this.onMouseMove(e, curdatestr, curdt)}
        // onMouseMove={this.onMouseMove.bind(this)}
        width={rectWidth} height={rectHeight}></rect>);
      // 周标题
      if (Object.keys(weekLables).indexOf(i.toString()) > -1 && i < 7) {
        rectweeks.push(<text key={i} x={xl + 7} y={yl} width={rectWidth + 10} height={rectHeight}>{weekLables[i]}</text>);
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
    const { rectWidth, rectHeight } = this.parent().props;
    const cls = this.classNames(prefixCls, className);
    return (
      <svg ref="svg" className={cls} width={`100%`} height={`${rectHeight * 7 + 60}px`}>
        <g className={`${prefixCls}-week`} transform="translate(0, 10)">
          {this.renderPanelHeader('week')}
        </g>
        <g className={`${prefixCls}-month`} transform={`translate(${rectWidth}, ${16})`}>
          {this.renderPanelHeader('month')}
        </g>
        <g transform={`translate(${rectWidth + 2}, ${rectHeight * 7 + 40})`}> {this.renderPanelColors()} </g>
        <g onMouseLeave={this.onMouseLeave.bind(this)}>
          {this.renderPanelHeader('day')}
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