import React from 'react';
import QuoteControls from '../../components/QuoteEditorPage/QuoteControls';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<QuoteControls />);
   });
});