import React, {useState} from 'react';

interface ExpandableProps<T> {
  onClick: (expand: boolean)=>void;
  expandIcon: (expanded: boolean) => React.ReactNode,
  defaultExpand: boolean,
}
/**
 * 可展开配置
*/
export default function ExpandableComponent<T>({defaultExpand,onClick, expandIcon}: ExpandableProps<T>) {
  const [ expand, setExpand ] = useState<boolean>(defaultExpand)
  return <div
      style={{display: 'flex',justifyContent:'center',alignItems:'center'}}
      onClick={()=>{
        setExpand(!expand)
        onClick(expand)
        // record: T, index: number, expanded: boolean
      }}
      children={expandIcon(expand)}
    />
}