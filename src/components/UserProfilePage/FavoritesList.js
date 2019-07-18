import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';
import FavoritesListItem from './FavoritesListItem';

export default function FavoritesList({ history }) {
  return (
    <GlobalContext.Consumer>
      {({ state }) => {
        return (
          <>
            <h3 className="favorites-list-heading">Favorites</h3>
            <ul className="favorites-list">
              { state.savedQuotes.map(quote => 
                <FavoritesListItem 
                  key={quote.id} 
                  quote={quote} 
                  history={history} 
                  savedQuoteId={quote.id}/>) }
            </ul>
          </>
        )
      }}
    </GlobalContext.Consumer>
  )
}
