import React from 'react';
import fontPairings from '../fonts/fontPairings';
import IteratorServices from '../services/IteratorServices';
import TokenServices from'../services/TokenServices';
import jwt from 'jsonwebtoken';
import { API_BASE_URL } from '../config';

const GlobalContext = React.createContext();

class GlobalContextManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //quote info
      quotes: [],
      currentQuote: '',
      backgroundImageUrls: [],
      fontPairings: [...fontPairings],
      backgroundImageUrl: '',
      fontPair: {},
      previousBackgroundImageUrl: '',
      previousFontPair: {},
      keepBackground: false,
      keepFonts: false,
      keepQuote: false,

      //user info
      isLoggedIn: false,
      username: '',
      userId: 0,
      savedQuotes: []
    }
  }

  //APP METHODS
  componentDidMount() {
    this.initializeApp();
    const isLoggedIn = TokenServices.getTokenByKey('motiv8-jwt');
    console.log(isLoggedIn);
    if (isLoggedIn) {
      const {
        header,
        payload,
      } = jwt.decode(isLoggedIn, {complete: true});
      console.log('header', header);
      console.log('payload', payload);
      
      this.setState({
        isLoggedIn: true,
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
        this.fontPairItObj = IteratorServices.createIterator(this.state.fontPairings);
        this.handleRandomize();
      })
      .catch(err => console.log(err));
  }
  //END APP METHODS

  //QUOTE METHODS
  randomizeQuote = () => {
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
          backgroundImageUrl: currentState.previousBackgroundImageUrl,
          previousBackgroundImageUrl: currentState.backgroundImageUrl
        }
      })
    }

    if(!this.state.keepFonts) {
      this.setState((currentState) => {
        return {
          fontPair: currentState.previousFontPair,
          previousFontPair: currentState.fontPair
        }
      })
    }

    if(!this.state.keepQuote) {
      this.setState((currentState) => {
        return {
          currentQuote: currentState.previousQuote,
          previousQuote: currentState.currentQuote
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
      backgroundImageUrl: this.state.backgroundImageUrl,
      quoteId: this.state.currentQuote.id,
      bodyFont: this.state.fontPair.body,
      authorFont: this.state.fontPair.author,
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
      getUpdatedSavedQuotes(userId);
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

  handleFavoritesListItemClick = (quote, history) => {
    this.setState({
      currentQuote: quote,
      backgroundImageUrl: quote.backgroundimageurl,
      keepBackground: false,
      keepFonts: false,
      keepQuote: false
    }, () => {
      history.push('/quotes');
    })
  }
  //END QUOTE METHODS


  //USER METHODS

  handleCreateAccountSubmit = (e, userInfo) => {
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
      this.handleLogin(null, data);
    })
  }

  handleLogin = (e, userInfo) => {
    if(e) e.preventDefault();
    const data = {
      username: userInfo.username,
      password: userInfo.password
    }

    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      let decodedToken = jwt.decode(res.authToken);
      TokenServices.setToken('motiv8-jwt', res.authToken);
      console.log(decodedToken);
        this.setState({
        isLoggedIn: true,
        username: decodedToken.sub,
        userId: decodedToken.userId,
        savedQuotes: res.savedQuotes
      })

      
    })
  }

  handleLogout = () => {
    TokenServices.removeTokenByKey('motiv8-jwt');
    this.setState({
      isLoggedIn: false,
      userId: 0,
      username: '',
      savedQuotes: []
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

  handleDeleteFavoritesListItem = (quoteId) => {
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
              return;
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
          backgroundImageUrls: resJson,
        },
        //runs after setState
        () => {
          this.backgroundUrlItObj = IteratorServices.createIterator(this.state.backgroundImageUrls);
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
          backgroundImageUrl: value.urls.regular,
          previousBackgroundImageUrl: currentState.backgroundImageUrl
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
          fontPair: value,
          previousFontPair: currentState.fontPair 
        }
      })
    }
    else {
      //if iterator done create new iterator then call the first value on it.
      this.fontPairItObj = IteratorServices.createIterator(this.state.fontPairings);
      this.iterateFontPairing(this.fontPairItObj.next());
    }
  }
  
  iterateQuote({value, done}) {
    if(!done) {
      this.setState(currentState => {
        return {
          currentQuote: value,
          previousQuote: currentState.currentQuote
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
        handleFavoritesListItemClick: this.handleFavoritesListItemClick,
        handleCreateAccountSubmit: this.handleCreateAccountSubmit,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        getUpdatedSavedQuotes: this.getUpdatedSavedQuotes,
        handleDeleteFavoritesListItem: this.handleDeleteFavoritesListItem
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
