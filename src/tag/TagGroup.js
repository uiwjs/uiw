import React from 'react';
import { Component, PropTypes } from '../utils/';
import Tag from './Tag';
import CheckedTag from './CheckedTag';
import './style/tag-group.less';


export default class TagGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicTags: props.options,
    };
  }
  getChildContext() {
    return { component: this };
  }
  onFieldChange = (e) => { this.getValue(e); }
  getValue(e) {
    const { options, onChange } = this.props;
    onChange(e, this.getFilteredTags(options));
  }
  getFilteredTags = (tags) => {
    return tags.map((tag) => {
      return typeof (tag) === 'object' ? tag.value : tag;
    });
  }
  handleClose(tag, e) {
    const { onChange } = this.props;
    const { dynamicTags } = this.state;
    dynamicTags.splice(dynamicTags.indexOf(tag), 1);

    this.setState({ dynamicTags }, () => {
      onChange(e, this.getFilteredTags(dynamicTags));
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({ dynamicTags: nextProps.options });
    }
  }

  render() {
    const { prefixCls, children, options, isRadio, checkedValues, onChange, checked, className, ...other } = this.props;
    const cls = this.classNames({
      [`${prefixCls}`]: true,
      [className]: className,
    });

    return (
      <div className={cls} {...other}>
        {
          options.map((tags, idx) => {
            const prop = {};
            let label = '';
            if (typeof (tags) === 'object') {
              prop.color = tags.color ? tags.color : '';
            }

            if (typeof (tags) === 'string') label = tags;
            if (tags.label || tags.value) label = tags.label || tags.value;

            if (Array.isArray(checkedValues) && (checked || isRadio)) {
              let isChecked = false;
              if (checkedValues.indexOf(tags) > -1 || checkedValues.indexOf(tags.value) > -1 || checkedValues.indexOf(tags.label) > -1) {
                isChecked = true;
              }
              return (
                <CheckedTag data={tags} checked={isChecked} {...prop} key={idx}>{label}</CheckedTag>
              );
            }
            return <Tag data={tags} {...prop} key={idx} onClose={this.handleClose.bind(this, tags)}>{label}</Tag>;
          })
        }
        {children &&
          <div
            className={this.classNames(`${prefixCls}-children`)}
            onBlur={this.onFieldChange}
            onKeyUp={this.onFieldChange}
          >
            {children}
          </div>
        }
      </div>
    );
  }
}


TagGroup.childContextTypes = {
  component: PropTypes.any,
};

TagGroup.propTypes = {
  prefixCls: PropTypes.string,
  options: PropTypes.array,
  checked: PropTypes.bool,
  isRadio: PropTypes.bool,
  checkedValues: PropTypes.array,
  onChange: PropTypes.func,
};

TagGroup.defaultProps = {
  prefixCls: 'w-tag-group',
  checkedValues: [],
  onChange: v => (v),
};
