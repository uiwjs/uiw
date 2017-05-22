import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

export default class HeatMap extends Component {
  render() {
    const { prefixCls } = this.props;
    return (
      <div></div>
    );
  }
}

HeatMap.propTypes = {
  weekLables:PropTypes.object,
  monthLables:PropTypes.array,
  panelColors:PropTypes.object,
}

HeatMap.defaultProps = {
  prefixCls: "w-heatmap", 
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
