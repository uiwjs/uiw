import React from 'react';
import TestRenderer from 'react-test-renderer';
import DatePicker from '../';
import { DatePickerDayDateSource } from '../DatePickerDay';

describe('<DatePicker />', () => {
  it('Should output a DatePicker', () => {
    const component = TestRenderer.create(
      <DatePicker
        date={new Date()}
        todayButton="今天"
        onChange={(selectedDate?: Date, dateSource?: DatePickerDayDateSource) => {
          console.log('selectedDate:', selectedDate)
          console.log('dateSource:', dateSource)
        }}
      />
    );
    let tree = component.toJSON();
    if (tree) {
      expect(tree.type).toBe('div');
      expect(tree.props.className).toBe('w-datepicker');
      expect(tree.children).toHaveLength(2);
    }
  });


  it('Should output a DatePicker of showTime', () => {
    const component = TestRenderer.create(
      <DatePicker
        showTime
        date={new Date('2019-06-30T18:19:20')}
        todayButton="今天"
        onChange={(selectedDate?: Date, dateSource?: DatePickerDayDateSource) => {
          console.log('selectedDate:', selectedDate)
          console.log('dateSource:', dateSource)
        }}
      />
    );
    let tree = component.toJSON();
    if (tree) {
      expect(tree.type).toBe('div');
      expect(tree.props.className).toBe('w-datepicker');
      expect(tree.children).toHaveLength(3);
      if (tree.children && tree.children[2]) {
        const child = (tree.children[2] as any);
        expect(child.props.className).toBe('w-datepicker-time-btn');
        expect(child.children).toEqual(['18:19:20']);
      }
    }
  });

});
