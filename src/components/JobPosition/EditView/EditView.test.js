import React from 'react';
import { shallow } from 'enzyme';
import EditView from './index';

describe('<EditView />', () => {
  test('renders without crashing', () => {
    shallow(<EditView onChange={() => {}} onSave={() => {}} />);
  });

  test('handles `onChange` when yearsExperience changes', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<EditView onSave={() => {}} onChange={onChangeMock} />);

    wrapper.find('#years-experience').simulate('change', {
      target: {
        value: '3+'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('yearsExperience', '3+');
  });

  test('1/2 handles `onChange` when eduLevels changes', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<EditView onSave={() => {}} onChange={onChangeMock} />);

    wrapper.find('#education-level-0').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('eduLevels.Bachelor / Graduate', true);
  });

  test('2/2 handles `onChange` when eduLevels changes', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<EditView onSave={() => {}} onChange={onChangeMock} />);

    wrapper.find('#education-level-3').simulate('change', {
      target: {
        checked: false
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith(
      'eduLevels.Vocational / Diploma / Associates degree',
      false
    );
  });

  test('handles `onChange` when minHours changes', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<EditView onSave={() => {}} onChange={onChangeMock} />);

    wrapper.find('#min-working-hours').simulate('change', {
      target: {
        value: '33'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('minHours', '33');
  });

  test('handles `onChange` when maxHours changes', () => {
    const onChangeMock = jest.fn();
    const wrapper = shallow(<EditView onSave={() => {}} onChange={onChangeMock} />);

    wrapper.find('#max-working-hours').simulate('change', {
      target: {
        value: '41'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('maxHours', '41');
  });

  test('handles `onSave` on form submission when all data is valid', () => {
    const onSaveMock = jest.fn();
    const wrapper = shallow(
      <EditView
        yearsExperience={5}
        eduLevels={{ level1: false, level2: true }}
        minHours={32}
        maxHours={40}
        onSave={onSaveMock}
        onChange={() => {}}
      />
    );

    wrapper.find('.edit-view__form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(onSaveMock).toHaveBeenCalled();
  });

  test('`onSave` should not be fired when any of the information is missing', () => {
    const onSaveMock = jest.fn();
    const wrapper = shallow(
      <EditView yearsExperience={undefined} onSave={onSaveMock} onChange={() => {}} />
    );

    wrapper.find('.edit-view__form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(onSaveMock).not.toHaveBeenCalled();
  });
});
