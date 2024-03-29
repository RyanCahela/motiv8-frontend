import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';

export default function FavoritesListItem(props) {
  return (
    <GlobalContext.Consumer>
      {({ GlobalMethods }) => {

        const {
          deleteFavoritesItem
        } = GlobalMethods;

        const quoteFont={
          fontFamily: props.quote.bodyfont
        }

        const authorFont = {
          fontFamily: props.quote.authorfont,
        }

        return (
          <li className="favorites-list-item">
            <div>
              <p style={quoteFont}>{props.quote.quote}</p>
              <p style={authorFont}>{props.quote.author}</p>
              <button 
                className="favorites-list-item__button" 
                onClick={() => deleteFavoritesItem(props.savedQuoteId)}>Delete</button>
            </div>
            <img className="favorites-list-item-img" alt='' src={props.quote.background_image_url}></img>
          </li>
        )
      }}
    </GlobalContext.Consumer>
  )
}
