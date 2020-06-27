import React from 'react';
import TestRenderer from 'react-test-renderer';
import Radio from '../Radio';
import RadioGroup from '../RadioGroup';

describe('<RadioGroup />', () => {
  it('Should output a RadioGroup', () => {
    const component = TestRenderer.create(
      <RadioGroup name="other" value="人妖">
        <Radio value="人妖" disabled>
          人妖
        </Radio>
        <Radio value="未知">未知</Radio>
      </RadioGroup>,
    );
    let json = component.toJSON();
    if (json) {
      expect(json.type).toBe('div');
      expect(json.props.className).toBe('w-radio-group');
      if (json.children) {
        expect(json.children.length).toBe(2);
      }
    }
    expect(component.root.props.value).toBe('人妖');
  });
});
