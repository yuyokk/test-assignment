import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

const REG_DIGITS_ONLY = /^\d+$/;
const REG_DIGITS_WITH_PLUS = /^(\d+)(\+?)$/;

describe('<InputWithValidation />', () => {
  test('renders without crashing', () => {
    shallow(<Input />);
  });

  describe('validates accordingly to passed in `validationRegExp`', () => {
    describe('onChange should return events that have numbers only', () => {
      test('1 / 5', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '32' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_ONLY} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).toBeCalledWith(event);
      });

      test('2 / 5', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '40' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_ONLY} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).toBeCalledWith(event);
      });

      test('3 / 5', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '40+' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_ONLY} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).not.toHaveBeenCalled();
      });

      test('4 / 5', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: 'test' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_ONLY} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).not.toHaveBeenCalled();
      });

      test('5 / 5', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: ' ' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_ONLY} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).not.toHaveBeenCalled();
      });
    });

    describe('onChange should return events that have numbers or numbers with trailing plus sign', () => {
      test('1 / 4', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '5' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_WITH_PLUS} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).toBeCalledWith(event);
      });

      test('2 / 4', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '5+' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_WITH_PLUS} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).toBeCalledWith(event);
      });

      test('3 / 4', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: '5+test' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_WITH_PLUS} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).not.toHaveBeenCalled();
      });

      test('4 / 4', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { value: 'isnotacceptable' }
        };
        const wrapper = shallow(
          <Input validationRegExp={REG_DIGITS_WITH_PLUS} onChange={onChangeMock} />
        );

        wrapper.find('input').simulate('change', event);
        expect(onChangeMock).not.toHaveBeenCalled();
      });
    });
  });
});
