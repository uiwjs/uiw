import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

export default class HeatMap extends Component {
  render() {
    const { prefixCls, days, className} = this.props;
    const cls = classNames(prefixCls,{
      [className]: className
    });

    let width=14, height=14;

    // 日历
    var rectdays = [],col=16;
    for (var i = 0; i < days; i++) {
      let xl = 21 + parseInt(i/7) * col;
      let yl = 17 + parseInt(i%7) * col;
      rectdays.push(<rect key={i} fill="#EBEDF0" x={xl} y={yl} width={width} height={height}></rect>);
    }

    return (
      <svg className={ cls } width="900px" height="128px">
        <g className={ `${prefixCls}-week` } transform="translate(0, 0)">
          <rect x="0" y="17" width={width} height={height}></rect>
          <rect x="0" y="33" width={width} height={height}></rect>
          <rect x="0" y="49" width={width} height={height}></rect>
          <rect x="0" y="65" width={width} height={height}></rect>
          <rect x="0" y="81" width={width} height={height}></rect>
          <rect x="0" y="97" width={width} height={height}></rect>
          <rect x="0" y="113" width={width} height={height}></rect>
        </g>
        {rectdays}
        <text>
          <tspan x="21" y="17">se</tspan>
        </text>
      </svg>
    );
  }
}

HeatMap.propTypes = {
  weekLables:PropTypes.object,
  monthLables:PropTypes.array,
  days:PropTypes.number,
  panelColors:PropTypes.object,
}

HeatMap.defaultProps = {
  prefixCls: "w-heatmap",
  days:365,
  // 默认选填选项  周标签显示
  weekLables: {0:'S', 1:'M', 2:'T', 3:'W', 4:'T', 5:'T', 6:'T', },
  // 默认选填选项  月份标签显示
  monthLables:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  // 颜色标记显示
  panelColors:{
    0:"#EBEDF0",
    4:"#C6E48B",
    8:"#7BC96F",
    12:"#239A3B",
    32:"#196127",
  }
}
