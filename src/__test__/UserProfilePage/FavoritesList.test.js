import React from 'react';
import FavoritesList from '../../components/UserProfilePage/FavoritesList';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<FavoritesList />);
   });
});