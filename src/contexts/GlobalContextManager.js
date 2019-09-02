import React from 'react';
import quoteFontPairings from '../fonts/quoteFontPairings';
import { createIterator } from '../services/IteratorServices';
import TokenServices from '../services/TokenServices';
import FetchServices, { convertResToJson } from '../services/FetchServices';
import { setLoginToken, fetchSavedQuotes, finalizeLogin, logoutUser } from '../services/UserServices';
import jwt from 'jsonwebtoken';
import { API_BASE_URL } from '../config';

const GlobalContext = React.createContext();

class GlobalContextManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteIterator: {},
      backgroundUrlIterator: {},
      fontIterator: {},
      quoteFontPairings: [...quoteFontPairings],

      currentQuote: {},
      currentQuoteBgImageUrl: '',
      currentQuoteFontPair: {},
      currentQuoteSaved: false,

      quoteHistory: [],

      keepQuoteBackground: false,
      keepQuoteFonts: false,
      keepQuoteQuote: false,

      userIsLoggedIn: false,
      username: '',
      userId: 0,
      savedQuotes: [],
    }
  }

  //APP METHODS
  componentDidMount() {
    this.initializeApp();
    const localToken = jwt.decode(TokenServices.getTokenByKey('motiv8-jwt'), {complete: true});
    
    if (localToken) {
      const { payload } = localToken;
      this.setState({
        userIsLoggedIn: true,
        userId: payload.userId,
        username: payload.sub
      });
    }
  }

  initializeApp() {
    let getImages = this.getBackgroundImages(30);
    let getQuotes = this.getQuotes(30);
    let getFonts = this.getFonts();
    
    Promise.all([ getQuotes, getImages, getFonts ])
      .then(() => this.randomizeQuote())
      .catch(err => console.error(err));
  }
  //END APP METHODS

  //QUOTE 
  randomizeQuote = () => {
    const {
      currentQuote,
      currentQuoteBgImageUrl,
      currentQuoteFontPair,
      keepBackground,
      keepFonts,
      keepQuote,
    } = this.state;

    console.dir(this.state);

    this.setState({
      //resets save button
      currentQuoteSaved: false
    });

    let currentQuoteConfig = {
      quote: currentQuote,
      quoteBgImageUrl: currentQuoteBgImageUrl,
      quoteFontPair: currentQuoteFontPair,
    };

    this.pushToHistory(currentQuoteConfig)
      .then(() => {
        if(!keepBackground) {
          this.iterateBackgroundUrl(this.backgroundUrlIterator);
        }
        if(!keepFonts) {
          this.iterateFontPairing(this.fontIterator);
        }
        if(!keepQuote) {
          this.iterateQuote(this.quoteIterator);
        }
      });
  }
  
  undoRandomizeQuote = () => {
    const prevQuote = this.state.quoteHistory.pop();
    this.setCurrentQuote(prevQuote);
  }

  saveQuote = (userId, getUpdatedSavedQuotes) => {
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
    FetchServices.postSaveQuote(data)
    .then(res => {
      if(res.ok) {
        getUpdatedSavedQuotes(userId);
        this.setState({currentQuoteSaved: true })
      }
    });
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
      currentQuoteBgImageUrl: quote.background_image_url,
      keepBackground: false,
      keepFonts: false,
      keepQuote: false
    }, () => {
      history.push('/quotes');
    })
  }
  //END QUOTE METHODS

  //USER METHODS
  loginUser = (userInfo, ) => {
    return FetchServices.postUserLogin(userInfo)
            .then(convertResToJson)
            .then(setLoginToken.bind(this))
            .then(fetchSavedQuotes)
            .then(convertResToJson)
            .then(finalizeLogin.bind(this));
  }

  logoutUser = () => logoutUser.call(this);

  getUpdatedSavedQuotes = (username) => {
    FetchServices.getSavedQuotesByUsername(username)
    .then(convertResToJson)
    .then(this.setUpdatedSavedQuotes);
  }

  deleteFavoritesItem = (savedQuoteId) => {
    FetchServices.deleteSavedQuoteById(savedQuoteId)
    .then(res => {
      if(res.ok) {
        this.setState(({ savedQuotes }) => {
          let newSavedQuotes = savedQuotes.filter((savedQuote) => {
            return !savedQuote.id === savedQuoteId; //removes quote matching id
          });
          return {
            savedQuotes: newSavedQuotes
          }
        });
      }
    })
    .catch(err => console.error(err));
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
  setBackgroundUrlIterator = (iterator) => {
    return new Promise((resolve) => {
      this.backgroundUrlIterator = iterator;
      resolve();
    });
  }

  setQuoteIterator = (iterator) => {
    return new Promise((resolve) => {
      this.quoteIterator = iterator;
      resolve();
    });
  }

  setFontIterator = (iterator) => {
    return new Promise((resolve) => {
      this.fontIterator = iterator;
      resolve(this.fontIterator);
    });
  }

  setUpdatedSavedQuotes = (json) => {
    return new Promise((resolve) => {
      this.setState({ savedQuotes: json }, resolve);
    });
  }

  setCurrentQuote = (obj) => {
    this.setState({
      currentQuote: obj.quote,
      currentQuoteBgImageUrl: obj.quoteBgImageUrl,
      currentQuoteFontPair: obj.quoteFontPair,
    });
  }

  pushToHistory = (quoteConfig) => {
    return new Promise((resolve) => {
      this.setState((currentState) => {
        let history = currentState.quoteHistory;
        history.push(quoteConfig);
        return {
          quoteHistory: history 
        }
      }, resolve) 
    });
  }

  getBackgroundImages(numberOfImages = 30) {
    return FetchServices.getBackgroundImages(numberOfImages)
            .then(convertResToJson)
            .then(createIterator)
            .then(this.setBackgroundUrlIterator);
  }

  getQuotes(numberOfQuotes = 30) {
    //TODO make quotes route dynamic to accept numberOfQuotes param
    return FetchServices.getQuotes()
            .then(convertResToJson)
            .then(createIterator)
            .then(this.setQuoteIterator);
  }

  getFonts() {
    const fontIterator = createIterator(this.state.quoteFontPairings);
    return this.setFontIterator(fontIterator);
  }
  
  iterateBackgroundUrl(iterator) {
    const {value, done} = iterator.next();
    if(done) {
      //create new iterator when old one runs out
      this.getBackgroundImages(30)
    }
    else {
      this.setState({ currentQuoteBgImageUrl: value.urls.regular });
    }
  }
  
  iterateFontPairing = (iterator) => {
    const {value, done} = iterator.next();
    if(!done) {
      this.setState({ currentQuoteFontPair: value });
    }
    else {
      //if iterator done create new iterator then call the first value on it.
      let newFontIterator = createIterator(this.state.quoteFontPairings);
      this.setFontIterator(newFontIterator)
            .then(this.iterateFontPairing);
    }
  }
  
  iterateQuote = (iterator) => {
    const { value, done } = iterator.next();
    if(!done) {
      this.setState({currentQuote: value })
    }
    else {
      this.getQuotes(30);
    }
  }

  //END HELPER FUNCTIONS
  render() {
    const globalContext = {
      GlobalState: this.state,
      GlobalMethods: {
        handleCheckboxCheck: this.handleCheckboxCheck,
        randomizeQuote: this.randomizeQuote,
        undoRandomizeQuote: this.undoRandomizeQuote,
        saveQuote: this.saveQuote,
        createAccount: this.createAccount,
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
        getUpdatedSavedQuotes: this.getUpdatedSavedQuotes,
        deleteFavoritesItem: this.deleteFavoritesItem,
        toggleMenuIsOpen: this.toggleMenuIsOpen,
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
