import React, { Component, DOM } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Messages from './messages';


export function isEmpty (obj) {
  if (obj === null || obj === undefined)     return true
  if (typeof obj === 'number' && isNaN(obj)) return true
  if (obj.length !== undefined)              return obj.length === 0
  if (obj instanceof Date)                   return false
  if (typeof obj === 'object')               return Object.keys(obj).length === 0
  return false
}

export default class Container extends Component {
  static propTypes = {
    placement: PropTypes.string
  }
  static defaultProps = {
    placement: "top",
    prefixCls: "w-messages",
  };
  constructor (props) {
    super(props)

    this.state = {
      messages: {}
    }

    this.addMessage = this.addMessage.bind(this)
    this.removeMessage = this.removeMessage.bind(this)
  }

  addMessage (msg) {
    let messages = this.state.messages
    messages[msg.id] = msg
    this.setState({ messages , placement:msg.placement, currentId:msg.id})
  }

  removeMessage (id) {
    let messages = this.state.messages
    delete messages[id]
    this.setState({ messages })
  }

  render () {
    const { prefixCls, className } = this.props;
    const {messages, currentId} = this.state;
    if(isEmpty(messages)) return DOM.noscript();

    console.log("currentId:",currentId)
    console.log("currentId:",messages[currentId])
    let cls = classNames(prefixCls);
    let _placement = messages[currentId].placement;
    if(_placement){
      cls = classNames(cls,{
        [`${prefixCls}-top`]: _placement           === 'top',            // 默认顶部中间
        [`${prefixCls}-bottom`]: _placement        === 'bottom',         // 底部中间
        [`${prefixCls}-top-left`]: _placement      === 'topLeft',        // 左边上角
        [`${prefixCls}-top-right`]: _placement     === 'topRight',       // 右边上角
        [`${prefixCls}-bottom-left`]: _placement   === 'bottomLeft',     // 左边下角
        [`${prefixCls}-bottom-right`]: _placement  === 'bottomRight',    // 右边下角
      })
    }
    console.log("cls::",cls,_placement)
    return (
      <div className={ cls }>
        {
          Object.keys(messages).map((key) => <Messages key={key} {...messages[key]} onClose={this.removeMessage} />)
        }
      </div>
    )
  }
}