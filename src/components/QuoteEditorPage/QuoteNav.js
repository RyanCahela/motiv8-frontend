import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';


export default function QuoteNav() {
  return (
    <GlobalContext.Consumer>
      {({ methods, state }) => {

        let {
          currentQuoteSaved,
          userIsLoggedIn,
          prevQuote,
          userId
        } = state

        let {
          getUpdatedSavedQuotes
        } = methods


        return (
          <div className="quote-nav-container">
            <button className="quote-nav__button randomize-button" onClick={() => methods.randomizeQuote()}>Randomize</button>
            <button
              disabled={prevQuote.quote ? false : 'disabled'}
              className={`quote-nav__button undo-button ${prevQuote.quote ? '' : 'button-disabled'}`} 
              onClick={() => methods.undoRandomizeQuote()}>
                Undo
            </button>
            <button 
              disabled={userIsLoggedIn ? false : 'disabled'}
              className={
                `quote-nav__button save-button 
                ${currentQuoteSaved ? 'save-success' : ''}
                ${userIsLoggedIn ? '' : 'button-disabled'}`
              } 
              onClick={() => methods.saveQuote(userId, getUpdatedSavedQuotes)}
              >
                Save
              {userIsLoggedIn
                ? ''
                : <div class="save-button__instructions">Log in to save quotes</div>
              }
            </button>
          </div>
        )
      }}
    </GlobalContext.Consumer>  
  )
}
