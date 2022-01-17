import React from 'react';
import TestRenderer from 'react-test-renderer';
import Collapse from '../Collapse';

describe('<Collapse />', () => {
  it('Should output a Collapse', () => {
    const component = TestRenderer.create(
      <Collapse
        activeKey={['1']}
        onChange={(keys: string[]) => {
          console.log('activeKey:', keys);
        }}
      >
        <Collapse.Panel header="大话西游" key="1">
          <div>一万年</div>
        </Collapse.Panel>
        <Collapse.Panel header="西游·降魔篇" key="2">
          <div>曾经牵挂，才能了无牵挂。</div>
        </Collapse.Panel>
        <Collapse.Panel header="国产零零漆" key="3" disabled>
          <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>
        </Collapse.Panel>
      </Collapse>,
    );
    let tree = component.toJSON();
    if (tree && !Array.isArray(tree)) {
      expect(tree.type).toBe('div');
      expect(tree.props.className).toBe('w-collapse');
    }
    expect(component.root.props.activeKey).toEqual(['1']);
    expect(component.root.props.children.length).toBe(3);
    expect(component.root.props.children[0].props.header).toBe('大话西游');
    expect(component.root.props.children[0].props.disabled).toBeFalsy();
  });
});
