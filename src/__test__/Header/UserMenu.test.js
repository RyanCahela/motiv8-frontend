import React from 'react';
import UserMenu from '../../components/Header/UserMenu';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<UserMenu />);
   });
});