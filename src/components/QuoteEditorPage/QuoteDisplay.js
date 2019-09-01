import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContextManager';

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
              <div className="quote-backdrop">
                <div className="quote-body" style={dynamicBodyFont}>{currentQuote.quote}</div>
                <div className="quote-author" style={dynamicAuthorFont}>{currentQuote.author}</div>
              </div>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
