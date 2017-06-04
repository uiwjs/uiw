import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

export default class ActionButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    // 焦点自动定位到按钮上面
    if (this.props.autoFocus) {
      const $this = ReactDOM.findDOMNode(this);
      this.timeoutId = setTimeout(() => $this.focus());
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }
  onClick() {
    const { onOk,closeModals } = this.props;
    if(!onOk) return closeModals("ok",...args);

    let ret;
    if(onOk.length) ret = onOk(closeModals);
      
    ret = onOk();
    if(!ret) closeModals();
    
    if(ret && ret.then){
      this.setState({ loading: true });
      ret.then((...args) => {
        closeModals(...args);
      });
    } 
  }
  render() {
    const { type, size, children } = this.props;
    const loading = this.state.loading;
    return (
      <Button type={type} size={size} onClick={this.onClick.bind(this)} loading={loading}>
        {children}
      </Button>
    );
  }
}