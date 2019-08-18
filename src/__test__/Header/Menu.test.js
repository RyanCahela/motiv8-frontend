import React from 'react';
import Menu from '../../components/Header/Menu';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Menu />);
   });
});