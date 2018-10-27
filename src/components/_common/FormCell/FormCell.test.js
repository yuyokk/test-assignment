import React from 'react';
import { shallow } from 'enzyme';
import FormCell from './index';

describe('<FormCell />', () => {
  test('renders without crashing', () => {
    shallow(<FormCell type="success" />);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <FormCell>
        <input type="text" />
      </FormCell>
    );
    expect(wrapper.contains(<input type="text" />)).toEqual(true);
  });

  it('renders error element when `hasError` passed in', () => {
    const wrapper = shallow(
      <FormCell hasError>
        <input type="text" />
      </FormCell>
    );
    expect(wrapper.find('.form-cell__error')).toHaveLength(1);
  });
});
