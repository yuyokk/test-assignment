import React from 'react';
import { shallow } from 'enzyme';
import Panel from './index';

describe('<Panel />', () => {
  test('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('renders a `.panel`', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.panel')).toHaveLength(1);
  });

  it('applies custom className', () => {
    const wrapper = shallow(<Panel className="custom-panel" />);
    expect(wrapper.hasClass('custom-panel')).toBe(true);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Panel>
        <h1 class="app-title">Panel title</h1>
      </Panel>
    );
    expect(wrapper.contains(<h1 class="app-title">Panel title</h1>)).toEqual(true);
  });
});
