import React from 'react';
import { Component, PropTypes, findDOMNode } from '../utils/';
import Tooltip from '../tooltip';
import "./style/index.less";

export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: this.props.days,
      tooltipShow: false,
      currentData: {},
      content: null  // tooltip展示内容
    }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onClick = this.onClick.bind(this)
    this.renderTooltip = this.renderTooltip.bind(this)
  }
  componentDidMount() {
    // 根据宽度来生成多少天的图形
    const { days } = this.props;
    const $this = findDOMNode(this);
    const width = $this.parentNode.offsetWidth;
    const col = parseInt(width / 16, 10);
    const daycount = col * 7 - 14;
    !days && this.setState({
      days: daycount
    })


  }
  numberSort(keys) {// 排序 比较函数
    return keys.sort((x, y) => {//比较函数
      if (x < y) return -1;
      else if (x > y) return 1;
      else return 0;
    })
  }
  isExistColor(num) { // 返回不同深浅的颜色
    const { panelColors } = this.props;
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

  isCurrentData(date) { // 判断传进来的数据，并返回颜色
    const { values, panelColors } = this.props;
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
  onMouseOver(e, curdatestr, curdt, refname) {
    const { onMouseOver, emptyMessage, message } = this.props;
    const { tooltipRefs } = this.refs;
    // const { currentData } = this.state;

    // 空消息不提示
    if (!emptyMessage && !curdt.count) {
      return this.setState({
        tooltipShow: false,
        content: null
      })
    };

    if (tooltipRefs && e.target) {
      // clearTimeout(this.timeoutCurData);
      tooltipRefs.style.marginLeft = e.target.x.animVal.value + "px"
      tooltipRefs.style.marginTop = e.target.y.animVal.value + "px";
      let tooltipConten = '';
      if (curdt.count && curdt.count > 0) {
        let content = curdt.content;
        if (message) {
          tooltipConten = message(content);
        } else {
          tooltipConten = content.map((item, idx) => {
            return <div key={idx}>{item}</div>
          })
        }
      } else {
        tooltipConten = emptyMessage;
      }

      this.setState({
        tooltipShow: (curdt.count < 1 || !curdt.content || curdt.content.length < 1) ? false : true,
        content: tooltipConten
      }, () => {
        onMouseOver(e, curdatestr, curdt);
      })

    }

  }
  onClick(e, curdate, curdt) {
    const { onClick } = this.props;
    onClick(e, curdate, curdt)
  }

  renderTooltip() {
    const { emptyMessage, message } = this.props;
    const { currentData } = this.state;
    if (currentData.count && currentData.count > 0) {
      let content = currentData.content;
      // console.log("content::", content)
      if (message) return message(content)
      return content.map((item, idx) => {
        return <div key={idx}>{item}</div>
      })
    }
    return emptyMessage
  }
  renderPanelColors() {
    let width = 14, height = 14, col = 16, rectPanelColors = [];
    const { panelColors } = this.props;
    // 颜色说明栏
    let nums = Object.keys(panelColors);
    for (let i = 0; i < nums.length; i++) {
      let xl = i * col;
      rectPanelColors.push(<rect key={i} width={width} height={height} x={xl} y="0" fill={panelColors[nums[i]]}></rect>)
    }
    return rectPanelColors;
  }
  renderPanelHeader(ty) {
    const { endDate, weekLables, monthLables } = this.props;
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
    const { prefixCls, tooltip, className } = this.props;
    let { tooltipShow, content } = this.state;
    const cls = this.classNames(prefixCls, className);
    return (
      <div className={`${prefixCls}-wrapper`} >
        {tooltip &&
          <div ref="tooltipRefs" className={`${prefixCls}-popup`}>
            <Tooltip trigger="click" ref="tooltipConRefs" content={content || ` `} visible={tooltipShow}>
            </Tooltip>
          </div>
        }
        <svg className={cls} width={`100%`} height="155px">
          <g className={`${prefixCls}-week`} transform="translate(0, 10)">
            {this.renderPanelHeader('week')}
          </g>
          <g className={`${prefixCls}-month`} transform={`translate(16, 14)`}>
            {this.renderPanelHeader('month')}
          </g>
          <g transform="translate(16, 138)"> {this.renderPanelColors()} </g>
          <g>{this.renderPanelHeader('day')}
          </g>
        </svg>
      </div>
    );
  }
}

HeatMap.propTypes = {
  weekLables: PropTypes.object,
  monthLables: PropTypes.array,
  values: PropTypes.array,
  tooltip: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  days: PropTypes.number,
  emptyMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  message: PropTypes.func,
  endDate: PropTypes.object,
  panelColors: PropTypes.object,
}

HeatMap.defaultProps = {
  prefixCls: "w-heatmap",
  tooltip: true,
  values: [],
  onClick() { },
  onMouseOver() { },
  endDate: new Date(),
  // 默认选填选项  周标签显示
  weekLables: { 1: 'M', 3: 'W', 5: 'F' },
  // 默认选填选项  月份标签显示
  monthLables: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  // 颜色标记显示
  panelColors: {
    0: "#EBEDF0",
    4: "#C6E48B",
    8: "#7BC96F",
    12: "#239A3B",
    32: "#196127",
  }
}
