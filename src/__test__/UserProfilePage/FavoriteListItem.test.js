import React from 'react';
import FavoritesListItem from '../../components/UserProfilePage/FavoritesListItem';
import { shallow } from 'enzyme';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<FavoritesListItem />);
   });
});