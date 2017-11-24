import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tag from './Tag';

export default class CheckedTag extends Component {
  state = {
    checked: false || this.props.checked,
    checkedValue: [],
  }
  componentDidMount() {
    const { checkedValues } = this.parent().props;
    this.setState({
      checkedValue: checkedValues,
    });
  }
  parent() {
    return this.context.component;
  }
  handleChange = (checked, e) => {
    const { data } = this.props;
    const { options, onChange, isRadio } = this.parent().props;
    const { checkedValue } = this.state;

    const children = data.value;
    if (options && checked) {
      let values = [];
      if (isRadio) {
        values.push(children);
      } else {
        values = [...checkedValue];
        const idx = values.indexOf(children);
        idx > -1 ? values.splice(idx, 1) : values.push(children);
      }
      this.setState({ checkedValue: values, checked: !this.state.checked }, () => {
        // 父组件的props.onChange
        onChange && onChange(e, values, options);
      });
    }
  }
  render() {
    const { data, ...props } = this.props;
    return <Tag {...props} checked={this.state.checked} onClick={this.handleChange} >{this.props.children}</Tag>;
  }
}
CheckedTag.contextTypes = {
  component: PropTypes.any,
};
