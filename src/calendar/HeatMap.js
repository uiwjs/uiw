import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tooltip from '../tooltip';
import HeatMapSVG from './HeatMapSVG';
import "./style/index.less";

export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipShow: true,
    }
  }
  getChildContext() {
    return { component: this }
  }
  componentDidMount() {
    const { tooltipRefs } = this.refs;
    tooltipRefs.style.display = 'none'
  }
  onMouseLeave() {
    const { tooltipRefs, tooltipConRefs } = this.refs;
    tooltipConRefs.hideTooltip();
    tooltipRefs.style.display = 'none'
  }

  onMouseOver(e, datestr, date) {
    const { onMouseOver, emptyMessage, message } = this.props;
    const { tooltipRefs, tooltipConRefs } = this.refs;
    // 空消息不提示
    if (!emptyMessage && !date.count) {
      tooltipConRefs.hideTooltip()
      tooltipRefs.style.display = 'none';
      return;
    };

    let tooltipConten = '';
    let content = date.content;
    if (message) {
      tooltipConten = message(content, date);
    } else if (content) {
      tooltipConten = content.map((item, idx) => {
        return <div key={idx}>{item}</div>
      })
    } else {
      tooltipConten = emptyMessage;
    }

    if (tooltipRefs && e && e.target) {
      tooltipRefs.style.marginLeft = e.target.x.animVal.value + "px"
      tooltipRefs.style.marginTop = (e.target.y.animVal.value - 5) + "px";
      tooltipConRefs.setState({
        content: tooltipConten
      }, () => {
        tooltipRefs.style.display = 'block';
        onMouseOver(e, datestr, date);
        tooltipConRefs.showTooltip();
      })
    }
  }
  render() {
    const { prefixCls, tooltip, className } = this.props;
    let { tooltipShow } = this.state;

    return (
      <div className={this.classNames(`${prefixCls}-wrapper`, className)} onMouseLeave={this.onMouseLeave.bind(this)}>
        {tooltip &&
          <div ref="tooltipRefs" className={`${prefixCls}-popup`}>
            <Tooltip trigger="click" ref="tooltipConRefs" visible={tooltipShow}> </Tooltip>
          </div>
        }
        <HeatMapSVG />
      </div>
    );
  }
}

HeatMap.childContextTypes = {
  component: PropTypes.any
};
HeatMap.propTypes = {
  weekLables: PropTypes.object,
  monthLables: PropTypes.array,
  values: PropTypes.array,
  tooltip: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  days: PropTypes.number,
  emptyMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.bool]),
  message: PropTypes.func,
  endDate: PropTypes.object,
  panelColors: PropTypes.object,
  rectWidth: PropTypes.number,
  rectHeight: PropTypes.number,
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
  rectWidth: 14,
  rectHeight: 14,
  // 颜色标记显示
  panelColors: {
    0: "#EBEDF0",
    4: "#C6E48B",
    8: "#7BC96F",
    12: "#239A3B",
    32: "#196127",
  }
}
