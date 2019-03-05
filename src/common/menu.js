const menuData = [
  {
    name: '指南',
    path: 'guide',
    icon: 'home',
    children: [
      { name: '快速开始', path: 'quick-start' },
      { divider: true, name: '工具' },
      { name: '在 create-react-app 中使用', path: 'create-react-app' },
      { name: '在 kkt 中使用', path: 'kkt' },
      { divider: true, name: '其它' },
      { name: '文档编辑预览', path: 'docs' },
      { name: '更新日志', path: 'changelog' },
      { name: '社区精选组件', path: 'recommendation' },
    ],
  },
  {
    name: '组件',
    path: 'components',
    icon: 'component',
    children: [
      { divider: true, name: '基本' },
      { name: 'Color 颜色', path: 'colors' },
      { name: 'Icon 图标', path: 'icon' },
      { name: 'Button 按钮', path: 'button' },
      { divider: true, name: '布局' },
      { name: 'Divider 分割线', path: 'divider' },
      { name: 'Grid 删格', path: 'Grid' },
      { name: 'Split 面板分割', path: 'Split' },
      { divider: true, name: '表单' },
      { name: 'Form 表单', path: 'form' },
      { name: 'Radio 单选框', path: 'radio' },
      { name: 'Checkbox 多选框', path: 'checkbox' },
      { name: 'Switch 开关', path: 'switch' },
      { name: 'Select 选择器', path: 'select' },
      { name: 'Input 输入框', path: 'input' },
      { name: 'Slider 滑块输入条', path: 'slider' },
      { name: 'FileInput 上传输入框', path: 'file-input' },
      { name: 'Textarea 多行文本输入框', path: 'textarea' },
      { divider: true, name: '时间日历' },
      { name: 'DatePicker 日期选择器', path: 'date-picker' },
      { name: 'DateInput 日期输入框', path: 'date-input' },
      { name: 'TimePicker 时间输入框', path: 'time-picker' },
      { name: 'MonthPicker 月份选择器', path: 'month-picker' },
      { name: 'Timestamp 时间戳', path: 'timestamp' },
      { divider: true, name: '数据显示' },
      { name: 'Avatar 头像', path: 'avatar' },
      { name: 'Badge 标记', path: 'badge' },
      { name: 'Card 卡片', path: 'card' },
      { name: 'Collapse 折叠面板', path: 'collapse' },
      { name: 'Tag 标签', path: 'tag' },
      { name: 'Table 表格', path: 'table' },
      { name: 'Progress 进度条', path: 'progress' },
      { name: 'Rate 评分', path: 'rate' },
      { name: 'List 列表', path: 'list' },
      { divider: true, name: '导航' },
      { name: 'Affix 图钉', path: 'affix' },
      { name: 'Breadcrumb 面包屑', path: 'breadcrumb' },
      { name: 'Dropdown 下拉菜单', path: 'dropdown' },
      { name: 'Menu 菜单', path: 'menu' },
      { name: 'Steps 步骤条', path: 'steps' },
      { name: 'Tabs 标签页', path: 'tabs' },
      { divider: true, name: '反馈' },
      { name: 'Overlay 基础弹出层', path: 'overlay' },
      { name: 'OverlayTrigger 基础弹出触发', path: 'overlay-trigger' },
      { name: 'Alert 确认对话框', path: 'alert' },
      { name: 'Drawer 抽屉', path: 'drawer' },
      { name: 'Modal 模态对话框', path: 'modal' },
      { name: 'Message 警告提示', path: 'message' },
      { name: 'Notify 消息通知', path: 'notify' },
      { name: 'Popover 气泡卡片', path: 'popover' },
      { name: 'Tooltip 文字提示', path: 'tooltip' },
      { divider: true, name: '其它' },
      { name: 'BackTop 返回顶部', path: 'back-top' },
      { name: 'CopyToClipboard 复制', path: 'copy-to-clipboard' },
      { name: 'Portal 入口', path: 'portal' },
    ],
  },
  {
    name: '提交问题',
    icon: 'issue',
    path: 'https://github.com/uiwjs/uiw/issues/new',
  },
  {
    name: 'Github',
    icon: 'github',
    path: 'https://github.com/uiwjs/uiw',
  },
  {
    name: 'Gitee',
    icon: 'gitee',
    path: 'https://gitee.com/uiw/uiw',
  },
];

function formatter(data, parentPath = '/') {
  return Object.keys(data).map((item) => {
    let { path } = data[item];
    if (/^https?:(?:\/\/)?/.test(path)) {
      path = data[item].path;
    } else {
      path = parentPath + data[item].path;
    }
    const result = { ...data[item], path };
    if (data[item].children) {
      result.children = formatter(data[item].children, `${parentPath}${data[item].path}/`, data[item].authority);
    }
    return result;
  });
}


function formatterCurrent(data, pathname, parentPath = '/', result) {
  for (let i = 0; i < data.length; i += 1) {
    let path = data[i].path;
    if (/^https?:(?:\/\/)?/.test(path)) {
      path = data[i].path;
    } else {
      path = parentPath + data[i].path;
    }
    if (path === pathname) {
      result = data[i];
      break;
    }
    if (data[i].children && data[i].children.length > 0 && !result) {
      result = formatterCurrent(data[i].children, pathname, `${path}/`);
    }
  }
  return result;
}


const getMenuData = () => formatter(menuData);
const getMenuCurrentData = path => formatterCurrent(menuData, path);

export {
  getMenuData,
  getMenuCurrentData,
};
