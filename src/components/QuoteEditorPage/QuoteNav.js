import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';


export default function QuoteNav() {
  return (
    <GlobalContext.Consumer>
      {({ GlobalState, GlobalMethods }) => {

        const {
          currentQuoteSaved,
          userIsLoggedIn,
          quoteHistory,
          userId
        } = GlobalState;

        const {
          getUpdatedSavedQuotes,
          randomizeQuote,
          saveQuote,
          undoRandomizeQuote,
        } = GlobalMethods;
        
        return (
          <div className="quote-nav-container">
            <button className="quote-nav__button randomize-button" onClick={() => randomizeQuote()}>Randomize</button>
            <button
              disabled={quoteHistory.length ? false : 'disabled'}
              className={`quote-nav__button undo-button ${quoteHistory.length ? '' : 'button-disabled'}`} 
              onClick={() => undoRandomizeQuote()}>
                Undo
            </button>
            <button 
              disabled={userIsLoggedIn ? false : 'disabled'}
              className={
                `quote-nav__button save-button 
                ${currentQuoteSaved ? 'save-success' : ''}
                ${userIsLoggedIn ? '' : 'button-disabled'}`
              } 
              onClick={() => saveQuote(userId, getUpdatedSavedQuotes)}
              >
                Save
              {userIsLoggedIn
                ? ''
                : <div className="save-button__instructions">Log in to save quotes</div>
              }
            </button>
          </div>
        )
      }}
    </GlobalContext.Consumer>  
  )
}
