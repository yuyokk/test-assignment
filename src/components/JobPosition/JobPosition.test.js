import React from 'react';
import { shallow } from 'enzyme';
import JobPosition from './index';

describe('<JobPosition />', () => {
  test('renders without crashing', () => {
    shallow(<JobPosition />);
  });
});
