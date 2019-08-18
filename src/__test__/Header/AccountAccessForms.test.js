import React from 'react';
import AccountAccessForms from '../../components/Header/AccountAccessForms';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<AccountAccessForms />);
   });
});