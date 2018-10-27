import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index';

describe('<Icon />', () => {
  test('renders without crashing', () => {
    shallow(<Icon type="success" />);
  });

  test('add `type` class to the node', () => {
    const wrapper = shallow(<Icon type="success" />);
    expect(wrapper.hasClass('icon--success')).toBe(true);
  });

  test('renders passed in `text`', () => {
    const wrapper = shallow(<Icon type="digit" text="999" />);
    expect(wrapper.text()).toEqual('999');
  });
});
