import React, { Component } from 'react';
import classNames from 'classnames';

export default class ButtonsGroup extends Component {
    static propTypes = {
        /**
         * Direction of Button Layout inside, Options: veritical, horizontal
         */
        direction: React.PropTypes.string
    };

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children, className} = this.props;
        const cls = classNames({
            'w-btn-group': true,
            'w-btn-group-inline': direction === 'horizontal',
            [className]: className
        });

        return (
            <div className={cls}>
                {children}
            </div>
        );
    }
};
