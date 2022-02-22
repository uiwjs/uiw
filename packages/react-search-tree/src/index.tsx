import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchTagInput, { DropContent } from './searchTagInput';

const TreeCheckeds = (props: DropContent) => {
  console.log('aa', props.value);
  return (
    <TreeChecked
    // data={data}
    // selectedKeys={['0-1-1']}
    // onExpand={(key, expanded, data, node) => {
    //   console.log(key, expanded, data, node);
    // }}
    // onSelected={(key, selected, item, evn) => {
    //   console.log('select:', key);
    //   console.log('select:', selected);
    //   console.log('select:', item);
    //   console.log('select:', evn);
    // }}
    />
  );
};

function TreeChecked() {
  return <SearchTagInput content={<TreeCheckeds value={[]} onSelected={() => {}} />} />;
}

export default TreeChecked;
