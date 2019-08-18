import React from 'react';
import LoginForm from '../../components/Header/LoginForm';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<LoginForm />);
   });
});