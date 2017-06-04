import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/buttons-group.less";

export default class ButtonGroup extends Component {
    render() {
        const { prefixCls, vertical, children, className} = this.props;
        const cls = classNames({
            [`${prefixCls}-group`]: true,
            [`${prefixCls}-group-vertical`]: vertical,
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};

ButtonGroup.propTypes = {
    vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
    prefixCls: "w-btn",
    vertical: false
};