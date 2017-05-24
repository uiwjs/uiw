import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tbody extends Component{
  renderTbodyItem(item){
    let items = [],key=0;
    for(let a in item){
      ++key;
      items.push(<td key={key}>{item[a]}</td>);
    }
    return items;
  }
  renderTbody(data){
    // console.log("getRender:",this.props.getRender('firstname'))
    let items = [];
    for(let i =0;i< data.length;i++){
      items.push(<tr key={i}>{this.renderTbodyItem.bind(this)(data[i])}</tr>)
    }
    return items;
  }
  render(){
    const { prefixCls, className, data } = this.props;
    return(
      <tbody>
        {this.renderTbody.bind(this)(data)}
      </tbody>
    )
  }
}

Tbody.defaultProps = {
  prefixCls: '',
  columns:[]
};
Tbody.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  data: PropTypes.array,
}