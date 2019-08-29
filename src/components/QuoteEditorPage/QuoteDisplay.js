import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContextManager';
import LoadingSpinner from '../Loading/LoadingSpinner';

export default class QuoteDisplay extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {

  }

  setIsLoading(bool) {
    this.setState({
      loading: bool,
    });
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({ state }) => {
          const dynamicBackgroundStyles = {
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${state.currentQuoteBgImageUrl})`,
          }

          const dynamicBodyFont = {
            fontFamily: state.currentQuoteFontPair['body']
          }
      
          const dynamicAuthorFont = {
            fontFamily: state.currentQuoteFontPair['author']
          }

          if(!state.currentQuoteBgImageUrl) {
            return (
            <div className="quote-display">
              <LoadingSpinner />
            </div>
            )

          }

          return (
            <div className="quote-display"style={dynamicBackgroundStyles}>
              <div className="quote-backdrop">
                <div className="quote-body" style={dynamicBodyFont}>{state.currentQuote.quote}</div>
                <div className="quote-author" style={dynamicAuthorFont}>{state.currentQuote.author}</div>
              </div>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
