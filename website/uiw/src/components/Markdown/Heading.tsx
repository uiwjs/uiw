import React from 'react';

function getId(childs: React.ReactNode[]) {
  let idStr = '';
  childs.forEach((item: any) => {
    if (item.props && item.props.value) {
      idStr += item.props.value;
    } else if (item.props.children) {
      idStr += getId(item.props.children);
    }
  });
  return idStr;
}

export type HeadingProps = {
  level?: number;
  children?: JSX.Element;
};

export default function Heading({ level, children }: HeadingProps) {
  let LevelElm = null;
  const idStr = getId(React.Children.toArray(children)).replace(/\s/g, '-');
  switch (level) {
    case 1:
      LevelElm = <h1 id={idStr}>{children}</h1>;
      break;
    case 2:
      LevelElm = <h2 id={idStr}>{children}</h2>;
      break;
    case 3:
      LevelElm = <h3 id={idStr}>{children}</h3>;
      break;
    case 4:
      LevelElm = <h4 id={idStr}>{children}</h4>;
      break;
    case 5:
      LevelElm = <h5 id={idStr}>{children}</h5>;
      break;
    case 6:
      LevelElm = <h6 id={idStr}>{children}</h6>;
      break;
    default:
      break;
  }
  return LevelElm;
}
