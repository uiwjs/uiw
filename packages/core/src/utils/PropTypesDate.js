
export const PropTypesDate = (props, propName, componentName) => {
  if (props[propName] && !(props[propName] instanceof Date)) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`);
  }
};
