import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  test('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders primary button', () => {
    const wrapper = shallow(<Button primary />);
    expect(wrapper.hasClass('btn-primary')).toBe(true);
  });

  it('renders secondary button', () => {
    const wrapper = shallow(<Button secondary />);
    expect(wrapper.hasClass('btn-secondary')).toBe(true);
  });
});
