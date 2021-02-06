import menuData from './menu.json';

export type MenuDataItemChild = {
  name: string;
  divider?: boolean;
  path: string;
};

export type MenuDataItem = {
  name: string;
  path: string;
  icon: string;
  children?: MenuDataItemChild[];
};

export type MenuData = typeof menuData;

function formatter(data: any, parentPath = '/'): MenuDataItem[] {
  return Object.keys(data).map((item) => {
    let { path } = data[item];
    if (/^https?:(?:\/\/)?/.test(path)) {
      path = data[item].path;
    } else {
      path = parentPath + data[item].path;
    }
    const result = { ...data[item], path };
    if (data[item].children) {
      result.children = formatter(
        data[item].children,
        `${parentPath}${data[item].path}/`,
        // data[item].authority,
      );
    }
    return result;
  });
}

function formatterCurrent(
  data: any,
  pathname: string,
  parentPath = '/',
  result?: any,
): MenuDataItem {
  console.log('data:', data);
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
const getMenuCurrentData = (path: string) => formatterCurrent(menuData, path);

export { getMenuData, getMenuCurrentData };
