import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';


export default function QuoteNav() {
  return (
    <GlobalContext.Consumer>
      {({ methods, state }) => {
        return (
          <div className="quote-nav-container">
            <button className="quote-nav__button randomize-button" onClick={() => methods.randomizeQuote()}>Randomize</button>
            <button
              disabled={state.prevQuote.quote ? false : 'disabled'}
              className={`quote-nav__button undo-button ${state.prevQuote.quote ? '' : 'undo-disabled'}`} 
              onClick={() => methods.undoRandomizeQuote()}>
                Undo
            </button>
            <button 
              className={`quote-nav__button save-button ${state.currentQuoteSaved ? 'save-success' : ''}`} 
              onClick={() => methods.saveQuote(state.userId, methods.getUpdatedSavedQuotes)}>
                Save
            </button>
          </div>
        )
      }}
    </GlobalContext.Consumer>  
  )
}
