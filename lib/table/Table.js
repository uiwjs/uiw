var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Component, PropTypes } from '../utils/';
import Thead from './Thead';
import Tbody from './Tbody';
import Colgroup from './Colgroup';
import Paging from '../paging/';
import Loading from '../loading/';
import Icon from '../icon/';

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onRowSelection = function (row, index, checked, e) {
      var _this$state = _this.state,
          rowsChecked = _this$state.rowsChecked,
          rowsCount = _this$state.rowsCount;
      var _this$props = _this.props,
          data = _this$props.data,
          rowSelection = _this$props.rowSelection;


      var _rowsChecked = rowsChecked;
      var count = Math.abs(checked ? rowsCount + 1 : rowsCount - 1);
      if (checked) {
        _rowsChecked[index] = row;
      } else {
        delete _rowsChecked[index];
      }
      _this.setState({
        rowsChecked: _rowsChecked,
        rowsCount: count,
        headchecked: count === data.length,
        headIndeterminate: count > 0 && count < data.length
      });
      rowSelection.onSelect && rowSelection.onSelect(row, index, checked, rowsChecked, e);
    };

    _this.selectedAll = function (e, checked) {
      var _this$props2 = _this.props,
          rowSelection = _this$props2.rowSelection,
          data = _this$props2.data,
          height = _this$props2.height,
          width = _this$props2.width;

      _this.setState({
        rowsCount: checked ? data.length : 0,
        headchecked: checked,
        headIndeterminate: false
      });
      _this.refs[height || width ? 'tbody_left' : 'tbody'].selectedAll(checked, function (selectDatas) {
        rowSelection.onSelectAll && rowSelection.onSelectAll(selectDatas, checked, e);
      });
    };

    _this.setFixedWidth = function (leftWidth, rightWidth) {
      _this.setState({
        leftFixedWidth: leftWidth,
        rightFixedWidth: rightWidth
      });
    };

    _this.onTrHover = function (ty, idx) {
      _this.setState({
        trHoverClassName: ty === 'enter' ? [idx] : []
      });
    };

    _this.state = {
      headIndeterminate: false, //表头半选中状态
      headchecked: false, //表头选中状态
      rowsCheckedAll: false, //所有行选中状态
      rowsChecked: {}, //选中的数据
      rowsCount: 0, //选中的行数

      trHoverClassName: [], // 行移入移除事件，

      scrollLeft: 0,
      scrollRight: 0,
      scrollTop: 0,
      leftFixedWidth: 0, // 左边固定的宽度
      rightFixedWidth: 0, // 右边固定的宽度
      leftFixedTop: null // 左边固定的距离顶部距离
    };
    return _this;
  }

  Table.prototype.componentDidMount = function componentDidMount() {
    var data = this.props.data;


    var checkedRow = [],
        rowsChecked = {},
        rowsCount = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i]._checked) {
        rowsCount += 1;
        checkedRow.push(data[i]);
        rowsChecked[i] = data[i];
      }
    }
    // 被选中的数据
    this.setState({
      rowsChecked: rowsChecked
    });
    if (checkedRow.length > 0 && checkedRow.length !== data.length) {
      this.setState({
        rowsCount: rowsCount,
        headIndeterminate: true,
        checkedRow: checkedRow
      });
    } else if (checkedRow.length === data.length) {
      this.setState({
        rowsCount: rowsCount,
        headIndeterminate: false,
        headchecked: true,
        checkedRow: checkedRow
      });
    }
    // leftFixedTop
    if (this.refs.tableThead && this.refs.tableThead.refs.thead && this.refs.tableThead.refs.thead.offsetHeight > 0) {
      this.setState({
        leftFixedTop: this.refs.tableThead.refs.thead.offsetHeight
      });
    }
  };
  // 单行选择事件

  // 全选


  //横向滚动事件
  Table.prototype.onScroll = function onScroll(e) {
    var _refs = this.refs,
        headerWrapper = _refs.headerWrapper,
        bodyWrapper = _refs.bodyWrapper,
        fixedBodyWrapper = _refs.fixedBodyWrapper,
        leftBodyWrapper = _refs.leftBodyWrapper,
        rightBodyWrapper = _refs.rightBodyWrapper;
    var prefixCls = this.props.prefixCls;

    var target = e && e.target ? e.target : bodyWrapper.target;

    if (target instanceof HTMLDivElement) {

      if (e.target === leftBodyWrapper) {
        bodyWrapper && (bodyWrapper.scrollTop = target.scrollTop);
        rightBodyWrapper && (rightBodyWrapper.scrollTop = target.scrollTop);
      }
      if (e.target === rightBodyWrapper) {
        bodyWrapper && (bodyWrapper.scrollTop = target.scrollTop);
        leftBodyWrapper && (leftBodyWrapper.scrollTop = target.scrollTop);
      }
      if (e.target === bodyWrapper) {
        headerWrapper.scrollLeft = target.scrollLeft;

        leftBodyWrapper && (leftBodyWrapper.scrollTop = target.scrollTop);
        rightBodyWrapper && (rightBodyWrapper.scrollTop = target.scrollTop);
      }
    }

    if (!fixedBodyWrapper) return;
    var scrollRight = target.scrollWidth - (target.scrollLeft + target.clientWidth);
    var fixedClassNames = "";
    if (target.scrollLeft < 1) {
      fixedClassNames = prefixCls + '-fixed ' + prefixCls + '-scroll-position-left';
    }
    if (target.scrollLeft > 0 && scrollRight > 0) {
      fixedClassNames = prefixCls + '-fixed ' + prefixCls + '-scroll-position-middle';
    }
    if (scrollRight < 1) {
      fixedClassNames = prefixCls + '-fixed ' + prefixCls + '-scroll-position-right';
    }
    if (e && e.target === bodyWrapper) {
      fixedBodyWrapper.className = fixedClassNames;
    }
  };

  // 是否有固定列
  Table.prototype.isColumnsFixed = function isColumnsFixed(columns, type) {
    var isFixed = false;
    for (var i = 0; i < columns.length; i++) {
      if (columns[i].fixed === type) {
        isFixed = true;
        break;
      }
      if (columns[i].children && columns[i].children.length) {
        isFixed = this.isColumnsFixed(columns[i].children, type);
        if (isFixed === true) break;
      }
    }
    return isFixed;
  };

  Table.prototype.render = function render() {
    var _this2 = this,
        _classNames2;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        rowSelection = _props.rowSelection,
        caption = _props.caption,
        footer = _props.footer,
        columns = _props.columns,
        data = _props.data,
        width = _props.width,
        paging = _props.paging,
        loading = _props.loading;
    var _state = this.state,
        headIndeterminate = _state.headIndeterminate,
        headchecked = _state.headchecked,
        trHoverClassName = _state.trHoverClassName;
    var height = this.props.height;
    // checkbox 选择数据如果存在删除重新渲染

    if (rowSelection) {
      if (columns[0].key === '_select') {
        columns.splice(0, 1);
      }
      columns.unshift({
        key: '_select',
        className: "_select"
      });
    }
    var tableTbody = function tableTbody(refname) {
      return React.createElement(Tbody, {
        ref: refname,
        type: refname,
        rowSelection: rowSelection,
        trHoverClassName: trHoverClassName,
        onTrHover: _this2.onTrHover,
        onRowSelection: _this2.onRowSelection,
        columns: columns, data: data });
    };

    var tableThead = function tableThead(refname) {
      return React.createElement(Thead, {
        ref: refname,
        rowSelection: rowSelection,
        setFixedWidth: _this2.setFixedWidth,
        headindeterminate: headIndeterminate,
        headchecked: headchecked,
        selectedAll: _this2.selectedAll,
        columns: columns });
    };

    var tableColgroup = React.createElement(Colgroup, { columns: columns });
    var tableCaption = caption && React.createElement(
      'div',
      { ref: 'caption', className: prefixCls + '-caption' },
      caption
    );
    var tableFooter = footer && React.createElement(
      'div',
      { className: prefixCls + '-footer' },
      footer
    );

    var pagingView = paging && React.createElement(Paging, _extends({ className: prefixCls + '-paging' }, paging));
    if (height || width || rowSelection || loading === (true || false)) {
      var _classNames;

      var fixedCloneTable = width ? React.createElement(
        'div',
        { ref: 'fixedBodyWrapper', className: this.classNames(prefixCls + '-fixed', prefixCls + '-scroll-position-left'),
          style: { marginTop: -this.state.leftFixedTop }
        },
        this.isColumnsFixed(columns, 'left') && React.createElement(
          'div',
          { className: this.classNames(prefixCls + '-fixed-left'),
            style: { width: this.state.leftFixedWidth } },
          React.createElement(
            'div',
            { className: prefixCls + '-fixed-head-left' },
            React.createElement(
              'table',
              null,
              React.cloneElement(tableColgroup),
              React.cloneElement(tableThead(), {
                cloneElement: "left"
              })
            )
          ),
          React.createElement(
            'div',
            { ref: 'leftBodyWrapper', onScroll: this.onScroll.bind(this), style: { height: height }, className: prefixCls + '-fixed-body-left' },
            React.createElement(
              'table',
              null,
              React.cloneElement(tableColgroup, { cloneElement: "left" }),
              React.cloneElement(tableTbody('tbody_left'), { cloneElement: "left" })
            )
          )
        ),
        this.isColumnsFixed(columns, 'right') && React.createElement(
          'div',
          { className: this.classNames(prefixCls + '-fixed-right'),
            style: { width: this.state.rightFixedWidth } },
          React.createElement(
            'div',
            { className: prefixCls + '-fixed-head-right' },
            React.createElement(
              'table',
              null,
              React.cloneElement(tableColgroup),
              React.cloneElement(tableThead(), {
                cloneElement: "right"
              })
            )
          ),
          React.createElement(
            'div',
            { ref: 'rightBodyWrapper', style: { height: height }, className: prefixCls + '-fixed-body-right' },
            React.createElement(
              'table',
              null,
              React.cloneElement(tableColgroup, { cloneElement: "right" }),
              React.cloneElement(tableTbody('tbody_right'), { cloneElement: "right" })
            )
          )
        )
      ) : null;

      // 固定头 或者左右滚动
      return React.createElement(
        'div',
        { className: prefixCls + '-warpper' },
        React.createElement(
          'div',
          { className: this.classNames(className, prefixCls, prefixCls + '-scroll', (_classNames = {}, _classNames['is-empty'] = data.length === 0, _classNames['is-footer'] = tableFooter, _classNames)) },
          tableCaption,
          React.createElement(
            'div',
            { ref: 'headerWrapper', className: prefixCls + '-head' },
            React.createElement(
              'table',
              { style: { width: width } },
              tableColgroup,
              tableThead("tableThead")
            )
          ),
          React.createElement(
            Loading,
            { loading: this.props.loading === undefined ? false : loading },
            data.length === 0 ? React.createElement(
              'div',
              { className: 'placeholder' },
              React.createElement(Icon, { type: 'frown-o' }),
              ' \u6682\u65E0\u6570\u636E'
            ) : React.createElement(
              'div',
              { ref: 'bodyWrapper', onScroll: this.onScroll.bind(this), style: { height: height }, className: prefixCls + '-body' },
              React.createElement(
                'table',
                { style: { width: width } },
                tableColgroup,
                tableTbody('tbody')
              )
            ),
            tableFooter,
            fixedCloneTable,
            pagingView
          )
        )
      );
    }

    return React.createElement(
      'div',
      { className: prefixCls + '-warpper' },
      React.createElement(
        'div',
        { className: this.classNames(className, prefixCls, prefixCls + '-default', (_classNames2 = {}, _classNames2['is-empty'] = data.length === 0, _classNames2['is-footer'] = tableFooter, _classNames2)) },
        tableCaption,
        React.createElement(
          'table',
          null,
          tableColgroup,
          tableThead("tableThead"),
          data.length === 0 ? React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { ref: function ref(elm) {
                    if (elm) {
                      elm.colSpan = _this2.refs.tableThead.getColSpan(columns);
                    }
                  } },
                React.createElement(Icon, { type: 'frown-o' }),
                ' \u6682\u65E0\u6570\u636E'
              )
            )
          ) : tableTbody()
        ),
        tableFooter
      ),
      pagingView
    );
  };

  return Table;
}(Component);

export default Table;


Table.defaultProps = {
  prefixCls: 'w-table',
  size: 'default',
  // loading: false,
  data: [],
  columns: []
};

Table.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  data: PropTypes.array,
  height: PropTypes.number,
  rowSelection: PropTypes.shape({
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    onCellClick: PropTypes.func
  }),
  paging: PropTypes.object,
  // onSelectAll: PropTypes.func,
  // onSelect: PropTypes.func,
  scroll: PropTypes.object
};