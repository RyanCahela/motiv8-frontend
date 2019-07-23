import React from 'react';
import quoteFontPairings from '../fonts/quoteFontPairings';
import IteratorServices from '../services/IteratorServices';
import TokenServices from'../services/TokenServices';
import jwt from 'jsonwebtoken';
import { API_BASE_URL } from '../config';

const GlobalContext = React.createContext();

class GlobalContextManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quoteBackgroundImageUrls: [],
      quoteFontPairings: [...quoteFontPairings],

      currentQuote: {},
      currentQuoteBgImageUrl: '',
      currentQuoteFontPair: {},
      currentQuoteSaved: false,

      prevQuote: {},
      prevQuoteBgImageUrl: '',
      prevQuoteFontPair: {},
      quoteHistory: [],

      keepQuoteBackground: false,
      keepQuoteFonts: false,
      keepQuoteQuote: false,

      userIsLoggedIn: false,
      username: '',
      userId: 0,
      savedQuotes: [],

      menuIsOpen: false,
    }
  }

  //APP METHODS
  componentDidMount() {
    this.initializeApp();
    const localToken = jwt.decode(TokenServices.getTokenByKey('motiv8-jwt'), {complete: true});
    
    if (localToken) {
      const {
        header,
        payload,
      } = localToken;
      console.log('header', header);
      console.log('payload', payload);
      
      this.setState({
        userIsLoggedIn: true,
        userId: payload.userId,
        username: payload.sub
      })
    }

  }

  initializeApp() {
    let getImages = this.getBackgroundImages(30);
    let getQuotes = this.getQuotes(30);
    
    Promise.all([ getQuotes, getImages ])
      .then(values => {
        this.fontPairItObj = IteratorServices.createIterator(this.state.quoteFontPairings);
        this.randomizeQuote();
      })
      .catch(err => console.log(err));
  }
  //END APP METHODS

  //QUOTE METHODS
  randomizeQuote = () => {
    this.setState({
      currentQuoteSaved: false
    })
    if(!this.state.keepBackground) {
      this.iterateBackgroundUrl(this.backgroundUrlItObj.next());
    }
    if(!this.state.keepFonts) {
      this.iterateFontPairing(this.fontPairItObj.next());
    }
    if(!this.state.keepQuote) {
      this.iterateQuote(this.quoteItObj.next());
    }
  }
  
  undoRandomizeQuote = () => {
    if(!this.state.keepBackground) {
      this.setState((currentState) => {
        return {
          currentQuoteBgImageUrl: currentState.prevQuoteBgImageUrl,
          prevQuoteBgImageUrl: currentState.currentQuoteBgImageUrl
        }
      })
    }

    if(!this.state.keepFonts) {
      this.setState((currentState) => {
        return {
          fontPair: currentState.previousFontPair,
          prevFontPair: currentState.fontPair
        }
      })
    }

    if(!this.state.keepQuote) {
      this.setState((currentState) => {
        return {
          currentQuote: currentState.prevQuote,
          prevQuote: currentState.currentQuote
        }
      })
    }
  }

  saveQuote = (userId, getUpdatedSavedQuotes) => {
    //TODO sends current quote config to favorites db table.

    if(userId === 0) {
      return;
    }

    const data = {
      backgroundImageUrl: this.state.currentQuoteBgImageUrl,
      quoteId: this.state.currentQuote.id,
      bodyFont: this.state.currentQuoteFontPair.body,
      authorFont: this.state.currentQuoteFontPair.author,
      userId: userId,
    }

    fetch(`${API_BASE_URL}/savedQuotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.ok) {
        getUpdatedSavedQuotes(userId);
        this.setState({currentQuoteSaved: true })
      }
    })
  }

  //refactor out to 3 different toggle functions
  handleCheckboxCheck = (e) => {
    switch(e.target.id) {
      case 'keep-quote-checkbox':
        this.setState((currentState) => {
          return {
            keepQuote: !currentState.keepQuote
          }
        });
        break;
      case 'keep-fonts-checkbox':
        this.setState((currentState) => {
          return {
            keepFonts: !currentState.keepFonts
          }
        });
        break;
      case 'keep-background-checkbox':
        this.setState((currentState) => {
          return {
            keepBackground: !currentState.keepBackground
          }
        })
        break;
      default:
    }
  }

  editFavoritesItem = (quote, history) => {
    this.setState({
      currentQuote: quote,
      currentQuoteBgImageUrl: quote.backgroundimageurl,
      keepBackground: false,
      keepFonts: false,
      keepQuote: false
    }, () => {
      history.push('/quotes');
    })
  }
  //END QUOTE METHODS


  //USER METHODS
  createAccount = (e, userInfo) => {
    e.preventDefault();
    const data = {
      username: userInfo.username,
      password: userInfo.password
    }

    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then(resJson => {
      this.loginUser(null, data);
    })
  }

  loginUser = (e, userInfo) => {
    if(e) e.preventDefault();
    const data = {
      username: userInfo.username,
      password: userInfo.password
    }

    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {

      if(res.error) {
        console.log('error', res.error);
        return;
      }
      let decodedToken = jwt.decode(res.authToken);
      TokenServices.setToken('motiv8-jwt', res.authToken);
      console.log(decodedToken);
        this.setState({
        userIsLoggedIn: true,
        username: decodedToken.sub,
        userId: decodedToken.userId,
        savedQuotes: res.savedQuotes,
        menuIsOpen: false
      })
      
    })
  }

  logoutUser = () => {
    TokenServices.removeTokenByKey('motiv8-jwt');
    this.setState({
      userIsLoggedIn: false,
      userId: 0,
      username: '',
      savedQuotes: [],
      menuIsOpen: false
    })
  }

  getUpdatedSavedQuotes = (userId) => {
    fetch(`${API_BASE_URL}/savedQuotes/${userId}`, {
      headers: {
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      }
    })
      .then(res => res.json())
      .then(updatedQuotesList => {
        this.setState({
          savedQuotes: updatedQuotesList
        })
      })
  }

  deleteFavoritesItem = (quoteId) => {
    const data = { quoteId }
    fetch(`${API_BASE_URL}/savedQuotes/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.ok) {
        this.setState((currentState) => {
          let newSavedQuotes = currentState.savedQuotes.filter((savedQuote) => {
            if(savedQuote.id === quoteId) {
              return false;
            }
            else {
              return savedQuote
            }
          });
          return {
            savedQuotes: newSavedQuotes
          }
        })
      }
    })
  }
  //END USER METHODS

  toggleMenuIsOpen = () => {
    this.setState((currentState) => {
      return {
        menuIsOpen: !currentState.menuIsOpen
      }
    })
  }
  
  //HELPER FUNCTIONS
  getBackgroundImages(numberOfImages = 30) {
    return fetch(`https://api.unsplash.com/photos/random?count=${numberOfImages}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(res => res.json())
    .then(resJson => {
      return new Promise((resolve) => {
        this.setState({
          quoteBackgroundImageUrls: resJson,
        },
        //runs after setState
        () => {
          this.backgroundUrlItObj = IteratorServices.createIterator(this.state.quoteBackgroundImageUrls);
          resolve("backgroundUrlItObj Created");
        })
      })
    })
  }

  getQuotes(numberOfQuotes = 30) {
    //TODO make quotes route dynamic to accept numberOfQuotes param
    return fetch(`${API_BASE_URL}/quotes`)
    .then(quotes => quotes.json())
    .then(quotes => {
      return new Promise((resolve) => {
        this.setState({
          quotes: quotes
        },
        //runs after setState
        () => {
          this.quoteItObj = IteratorServices.createIterator(this.state.quotes);
          resolve("quoteItObj Created");
        })
      });
    });
  }
  
  iterateBackgroundUrl({value, done}) {
    if(!done) {
      this.setState((currentState) => {
        return {
          currentQuoteBgImageUrl: value.urls.regular,
          prevQuoteBgImageUrl: currentState.currentQuoteBgImageUrl
        }
      })
    }
    //create new iterator when old one runs out
    else {
      this.getBackgroundImages(30)
    }
  }
  
  iterateFontPairing({value, done}) {
    if(!done) {
      this.setState((currentState) => {
        return {
          currentQuoteFontPair: value,
          prevQuoteFontPair: currentState.fontPair 
        }
      })
    }
    else {
      //if iterator done create new iterator then call the first value on it.
      this.fontPairItObj = IteratorServices.createIterator(this.state.quoteFontPairings);
      this.iterateFontPairing(this.fontPairItObj.next());
    }
  }
  
  iterateQuote({value, done}) {
    if(!done) {
      this.setState(currentState => {
        return {
          currentQuote: value,
          prevQuote: currentState.currentQuote
        }
      })
    }
    else {
      this.getQuotes(30);
    }
  }
  //END HELPER FUNCTIONS

  render() {
    const globalContext = {
      state: this.state,
      methods: {
        handleCheckboxCheck: this.handleCheckboxCheck,
        randomizeQuote: this.randomizeQuote,
        undoRandomizeQuote: this.undoRandomizeQuote,
        saveQuote: this.saveQuote,
        editFavoritesItem: this.editFavoritesItem,
        createAccount: this.createAccount,
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        getUpdatedSavedQuotes: this.getUpdatedSavedQuotes,
        deleteFavoritesItem: this.deleteFavoritesItem,
        toggleMenuIsOpen: this.toggleMenuIsOpen
      }
    }
  
    return (
      <GlobalContext.Provider value={globalContext}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContext , GlobalContextManager };
