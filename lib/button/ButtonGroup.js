function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import "./style/buttons-group.less";

var ButtonGroup = function (_Component) {
    _inherits(ButtonGroup, _Component);

    function ButtonGroup() {
        _classCallCheck(this, ButtonGroup);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ButtonGroup.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            vertical = _props.vertical,
            children = _props.children,
            className = _props.className;

        var cls = this.classNames((_classNames = {}, _classNames[prefixCls + '-group'] = true, _classNames[prefixCls + '-group-vertical'] = vertical, _classNames[className] = className, _classNames));

        return React.createElement(
            'div',
            { className: cls },
            children
        );
    };

    return ButtonGroup;
}(Component);

export default ButtonGroup;
;

ButtonGroup.propTypes = {
    vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
    prefixCls: "w-btn",
    vertical: false
};