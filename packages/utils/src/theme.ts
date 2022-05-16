export type CssVariableType = Record<string, string | number>;

/**
 * @description: 转换驼峰命名
 * @param {string} value 变量值
 * @param {string} ident 前缀标识
 */
export const transformationHump = (value: string, ident: string) => {
  const Reg = new RegExp(`^${ident}`);
  return value.replace(Reg, '').replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

/**
 * `css 变量`转换成`主题变量`规则 ：css变量去除标识(`--w-`)之后，进行转换 驼峰命名
 * @description: css 变量转换主题变量
 * @param {CssVariableType} cssVariable css变量集合
 * @param {string} ident 前缀标识
 */
export const transformationVariable = (cssVariable: CssVariableType, ident: string) => {
  const Variable: Record<string, string> = {};
  Object.keys(cssVariable || {}).forEach((key) => {
    const Reg = new RegExp(`^${ident}`);
    const name = transformationHump(key, ident);
    if (Reg.test(ident)) {
      // 这种是变量的方式
      Variable[name] = `var(${key})`;
    } else {
      // 这种是直接值的方式
      Variable[name] = `${cssVariable[key]}`;
    }
  });
  return Variable;
};
