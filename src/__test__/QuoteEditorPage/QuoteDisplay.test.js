import React from 'react';
import QuoteDisplay from '../../components/QuoteEditorPage/QuoteDisplay';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<QuoteDisplay />);
   });
});