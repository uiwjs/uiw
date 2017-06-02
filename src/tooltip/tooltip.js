import React, { Component } from 'react';
import ReactDOM,{findDOMNode} from 'react-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Transition from '../transition'

export default class Tooltip extends Component {
  constructor(props){
    super(props);
    this.state = {
      showTooltip:false,
      popupwidth:0,
      stylesPopup:{}
    }
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.styles = this.styles.bind(this);
  }
  componentDidMount(){
    this.setState({
      stylesPopup:this.styles()
    })
  }
  showTooltip(){
    this.setState({
      showTooltip:true,
    })
    setTimeout(()=>{
      this.setState({
        stylesPopup:this.styles()
      })
    },0)
  }
  hideTooltip(){
    this.setState({
      showTooltip:false
    })
  }
  // 弹出的位置
  styles(){
    const { placement } = this.props;
    const { showTooltip } = this.state;
    const { reference, popup } = this.refs;
    let top = 0,left =0;

    let popwidth = popup.offsetWidth
    let popheight = popup.offsetHeight

    let refwidth = reference.offsetWidth
    let refheight = reference.offsetHeight

    let diffwidth = popwidth - refwidth;
    let diffheight = popheight - refheight;

    switch(placement){
      case "top": 
        top = -(refheight>popheight?refheight:popheight);
        left = diffwidth>0?-(diffwidth/2):Math.abs(diffwidth/2);
        break;
      case "topLeft": 
        top = -(refheight>popheight?refheight:popheight);
        left = 0;
        break;
      case "topRight": 
        top = -(refheight>popheight?refheight:popheight);
        left = -(refwidth>popwidth?refwidth-popwidth:popwidth-refwidth);
        break;
      case "left": 
        top = diffheight > 0 ? -(diffheight/2):Math.abs(diffheight/2);
        left = -popwidth;
        break;
      case "leftTop": 
        top = 0;
        left = -popwidth;
        break;
      case "leftBottom": 
        top = (refheight>popheight?(refheight-popheight):-(popheight-refheight));
        left = -popwidth;
        break;
      case "right": 
        top = diffheight > 0 ? -(diffheight/2):Math.abs(diffheight/2);
        left = refwidth;
        break;
      case "rightTop": 
        top = 0;
        left = refwidth;
        break;
      case "rightBottom": 
        top = (refheight>popheight?(refheight-popheight):-(popheight-refheight));
        left = refwidth;
        break;
      case "bottom": 
        top = refheight
        left = diffwidth>0?-(diffwidth/2):Math.abs(diffwidth/2);
        break;
      case "bottomLeft": 
        top = refheight;
        left = 0;
        break;
      case "bottomRight": 
        top = refheight;
        left = -(refwidth>popwidth?refwidth-popwidth:popwidth-refwidth);
        break;
    }
    if(placement=="topLeft"){
      console.log("topLeft::",top,-(refheight>popheight?refheight:popheight))
    }
    let sty = {};
    if(top||top==0) sty.top = top+'px';
    if(left) sty.left = left+'px';
    return sty
  }
  render() {
    const { prefixCls,className,children,visibleArrow,placement,content, trigger,visible,onVisibleChange,effect, ...others } = this.props;
    const { stylesPopup,showTooltip } = this.state;
    const cls = classNames(prefixCls,className,{
      [`${prefixCls}-placement-${placement}`]:placement
    })

    return (
      <div className={cls} {...others} onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
        <div ref="reference" className={`${prefixCls}-children`}> {children} </div>
        <div ref="popup" style={stylesPopup} className={`${prefixCls}-popup`}>
          <Transition type="fade-in">
            {showTooltip&&<div className={`${prefixCls}-content`}>
              {visibleArrow&&<div className={`${prefixCls}-arrow`}></div>}
              <div className={`${prefixCls}-inner`}>{content}</div>
            </div>}
          </Transition>
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  prefixCls: PropTypes.string,
  // 显示的内容，也可以通过 slot#content 传入 DOM
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  // Tooltip 的出现位置
  placement: PropTypes.oneOf([
    'top','topLeft','topRight',
    'left','leftTop','leftBottom',
    'right','rightTop','rightBottom',
    'bottom','bottomLeft','bottomRight'
  ]),
  // 默认提供的主题: dark, light
  effect: PropTypes.oneOf(['dark','light']),
  // 触发行为
  trigger: PropTypes.oneOf(['hover','focus','click']),
  // 状态是否可用
  disabled: PropTypes.bool,
  // 手动控制状态的展示
  visible: PropTypes.bool,
  // 是否显示 Tooltip 箭头
  visibleArrow: PropTypes.bool,
  // 显示隐藏的回调
  onVisibleChange: PropTypes.func,
  style: PropTypes.object,
};

Tooltip.defaultProps = {
  prefixCls: "w-tooltip",
  effect: "dark",
  placement: "top",
  disabled: false,
  visible: false,
  visibleArrow: true,
  trigger: "hover",
  onVisibleChange:e => (e)
};
