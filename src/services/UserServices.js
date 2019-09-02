import TokenServices from '../services/TokenServices';
import FetchServices from '../services/FetchServices';
import jwt from 'jsonwebtoken';

export function createAccount(newUserInfo) {
  return FetchServices.postNewUser(newUserInfo)
}

export function checkIfAccountCreationError(json) {
  if(json.error) {
    throw json.error;
  }
  return json;
}

export function setLoginToken(res) {
  if(res.error) {
    throw res.error;
  }
  return TokenServices.setToken('motiv8-jwt', res.authToken);
}

export function fetchSavedQuotes() {
  let decodedToken = jwt.decode(TokenServices.getTokenByKey('motiv8-jwt'));
  return FetchServices.getSavedQuotesByUsername(decodedToken.sub);
}

export function finalizeLogin(savedQuotes) {
  let decodedToken = jwt.decode(TokenServices.getTokenByKey('motiv8-jwt'));
  return new Promise((resolve) => {
    this.setState({
        userIsLoggedIn: true,
        username: decodedToken.sub,
        userId: decodedToken.userId,
        savedQuotes:savedQuotes,
        menuIsOpen: false
      }, resolve);
  })  
}

export function logoutUser() {
  TokenServices.removeTokenByKey('motiv8-jwt');
  this.setState({
    userIsLoggedIn: false,
    userId: 0,
    username: '',
    savedQuotes: [],
    menuIsOpen: false
  });
}

const UserServices = {
  setLoginToken,
  fetchSavedQuotes,
  finalizeLogin,
  logoutUser
}

export default UserServices;
