import React from 'react';
import { shallow } from 'enzyme';
import Badge from './index';

describe('<Badge />', () => {
  test('renders without crashing', () => {
    shallow(<Badge />);
  });

  test('renders a `.badge`', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.find('.badge')).toHaveLength(1);
  });

  test('renders passed in `text`', () => {
    const wrapper = shallow(<Badge text="Awesome badge" />);
    expect(wrapper.text()).toEqual('Awesome badge');
  });
});
