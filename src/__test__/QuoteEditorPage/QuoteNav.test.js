import React from 'react';
import QuoteNav from '../../components/QuoteEditorPage/QuoteNav';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<QuoteNav />);
   });
});