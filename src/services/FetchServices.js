import { API_BASE_URL } from '../config';
import TokenServices from '../services/TokenServices';

const FetchServices = {
  getBackgroundImages(numberOfImages) {
    return fetch(`${API_BASE_URL}/backgroundImages/${numberOfImages}`);
  },
  getSavedQuotesByUsername(username) {
    return fetch(`${API_BASE_URL}/savedQuotes/${username}`, {
      headers: {
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      }
    });
  },
  getQuotes() {
    return fetch(`${API_BASE_URL}/quotes`);
  },
  postSaveQuote(data) {
    return fetch(`${API_BASE_URL}/savedQuotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      },
      body: JSON.stringify(data)
    });
  },
  postNewUser(data) {
    return fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  },
  postUserLogin(data) {
    return fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  },
  deleteSavedQuoteById(id) {
    return fetch(`${API_BASE_URL}/savedQuotes/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenServices.getTokenByKey('motiv8-jwt')}`
      },
      body: JSON.stringify({"savedQuoteId": id})
    });
  },
  convertResToJson(res) {
    return res.json();
  }
}

export function convertResToJson(res) {
    return res.json();
}

export default FetchServices;