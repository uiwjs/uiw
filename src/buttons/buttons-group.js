import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ButtonsGroup extends Component {
    static propTypes = {
        vertical: PropTypes.bool
    };

    static defaultProps = {
        vertical: false
    };

    render() {
        const {vertical, children, className} = this.props;
        const cls = classNames({
            'w-btn-group': true,
            'w-btn-group-vertical': vertical,
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};
