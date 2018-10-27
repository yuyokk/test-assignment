import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Summary from './index';

describe('<Summary />', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Summary
          yearsExperience={1}
          eduLevels={{
            'level 1': true,
            'level 2': true
          }}
          minHours={32}
          maxHours={40}
          onEdit={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('handles onEdit click', () => {
    const onEditMock = jest.fn();
    const wrapper = mount(<Summary onEdit={onEditMock} />);
    wrapper
      .find('.summary__edit-btn')
      .first()
      .simulate('click');
    expect(onEditMock).toBeCalled();
  });
});
