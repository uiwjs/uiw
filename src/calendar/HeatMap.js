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
      // content: null,  // tooltip展示内容
      content: 'tooltip展示内容'  // tooltip展示内容
    }
    // this.onMouseOver = this.onMouseOver.bind(this)
    // this.onClick = this.onClick.bind(this)
    // this.renderTooltip = this.renderTooltip.bind(this)
  }
  getChildContext() {
    return { component: this }
  }
  componentDidMount() {
  }
  onMouseLeave() {
    this.setState({
      tooltipShow: false, content: null
    })
  }

  onMouseOver(e, datestr, date) {
    const { onMouseOver, emptyMessage, message } = this.props;
    const { tooltipRefs } = this.refs;
    // 空消息不提示
    if (!emptyMessage && !date.count) {
      return this.setState({
        tooltipShow: false,
        content: null
      })
    };

    if (tooltipRefs && e.target) {
      console.log("---->123123")
      // clearTimeout(this.timeoutCurData);
      tooltipRefs.style.marginLeft = e.target.x.animVal.value + "px"
      tooltipRefs.style.marginTop = (e.target.y.animVal.value - 5) + "px";
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

      this.setState({
        // tooltipShow: (date.count < 1 || !date.content || date.content.length < 1) ? false : true,
        tooltipShow: true,
        content: tooltipConten
      }, () => {
        onMouseOver(e, datestr, date);
      })
    }
  }
  render() {
    const { prefixCls, tooltip, className } = this.props;
    let { tooltipShow, content } = this.state;

    return (
      <div className={this.classNames(`${prefixCls}-wrapper`, className)} onMouseLeave={this.onMouseLeave.bind(this)}>
        {tooltip &&
          <div ref="tooltipRefs" className={`${prefixCls}-popup`}>
            <Tooltip trigger="click" ref="tooltipConRefs" content={content || ` `} visible={tooltipShow}> </Tooltip>
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
