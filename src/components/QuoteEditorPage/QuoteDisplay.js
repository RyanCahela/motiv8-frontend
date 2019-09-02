import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContextManager';
import LoadingSpinner from '../Loading/LoadingSpinner';
export default class QuoteDisplay extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({ GlobalState }) => {

          const {
            currentQuote,
            currentQuoteBgImageUrl,
            currentQuoteFontPair,
          } = GlobalState;

          const dynamicBackgroundStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${currentQuoteBgImageUrl})`,
          }

          const dynamicBodyFont = {
            fontFamily: currentQuoteFontPair['body']
          }
      
          const dynamicAuthorFont = {
            fontFamily: currentQuoteFontPair['author']
          }

          return (
            <div className="quote-display"style={dynamicBackgroundStyles}>
              {currentQuote.hasOwnProperty('quote')
              ? <div className="quote-backdrop">
                  <div className="quote-body" style={dynamicBodyFont}>{currentQuote.quote}</div>
                  <div className="quote-author" style={dynamicAuthorFont}>{currentQuote.author}</div>
                </div>
              : <LoadingSpinner />
              }
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
