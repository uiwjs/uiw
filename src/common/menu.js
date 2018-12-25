
const menuData = {
  guide: {
    name: '指南',
    path: 'guide',
    icon: 'home',
    children: [
      {
        name: '快速开始',
        path: 'quick-start',
      },
      {
        name: '日志',
        path: 'changelog',
      },
    ],
  },
  components: {
    name: '组件',
    path: 'components',
    icon: 'component',
    children: [
      {
        divider: true,
        name: '基本',
      },
      {
        name: 'Color 颜色',
        path: 'colors',
      },
      {
        name: 'Layout 布局',
        path: 'layout',
      },
      {
        name: 'Icon 图标',
        path: 'icon',
      },
      {
        name: 'Button 按钮',
        path: 'button',
      },
      {
        divider: true,
        name: '表单',
      },
      {
        name: 'Form 表单',
        path: 'form',
      },
      {
        name: 'Radio 单选框',
        path: 'radio',
      },
      {
        name: 'Checkbox 多选框',
        path: 'checkbox',
      },
      {
        name: 'Switch 开关',
        path: 'switch',
      },
      {
        name: 'Input 输入框',
        path: 'input',
      },
      {
        divider: true,
        name: '数据显示',
      },
      {
        name: 'Tag 标签',
        path: 'tag',
      },
      {
        name: 'Rate 评分',
        path: 'rate',
      },
    ],
  },
  issue: {
    name: '提交问题',
    icon: 'issue',
    path: 'https://github.com/uiw-react/uiw/issues/new',
  },
  github: {
    name: 'Github',
    icon: 'github',
    path: 'https://github.com/uiw-react/uiw',
  },
};

export { menuData };

// /* eslint no-useless-escape:0 */
// const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
// function isUrl(path) {
//   return reg.test(path);
// }
// function formatter(data, parentPath = '/', parentAuthority) {
//   return data.map((item) => {
//     let { path } = item;
//     if (!isUrl(path)) {
//       path = parentPath + item.path;
//     }
//     const result = {
//       ...item,
//       path,
//       authority: item.authority || parentAuthority,
//     };
//     if (item.children) {
//       result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
//     }
//     return result;
//   });
// }

// export const getMenuData = () => formatter(menuData);
