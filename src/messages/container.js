import React, { Component, DOM } from 'react';
import PropTypes from 'prop-types';
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
  static defaultProps = {
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
    this.setState({ messages })
  }

  removeMessage (id) {
    let messages = this.state.messages
    delete messages[id]
    this.setState({ messages })
  }

  render () {
    const { prefixCls } = this.props;
    const messages = this.state.messages;
    if(isEmpty(messages)) return DOM.noscript();

    return (
      <div className={ prefixCls }>
        {
          Object.keys(messages).map((key) => <Messages key={key} {...messages[key]} onClose={this.removeMessage} />)
        }
      </div>
    )
  }
}