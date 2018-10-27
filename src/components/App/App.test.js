import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('<App />', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });
});
