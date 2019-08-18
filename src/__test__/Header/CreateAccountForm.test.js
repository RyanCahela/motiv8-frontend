import React from 'react';
import CreateAccountForm from '../../components/Header/CreateAccountForm';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<CreateAccountForm />);
   });
});