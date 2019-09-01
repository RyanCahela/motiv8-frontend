import React, { Component } from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';
import { createAccount, checkIfAccountCreationError } from '../../services/UserServices';
import { convertResToJson } from '../../services/FetchServices';

export default class CreateAccountForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      errorMessage: '',
      loading: false,
    }
  }

  handleTextInput(e) {
    switch (e.target.id) {
      case 'create-username-input':
        this.setState({
          username: e.target.value
        })
        break;
      case 'create-password-input':
        this.setState({
          password: e.target.value
        })
        break;
      case 'create-password-confirm-input':
        this.setState({
          passwordConfirm: e.target.value
        })
        break;
      default:
        console.error("onChange id not found in create account form");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let { password, passwordConfirm } = this.state
    if(password !== passwordConfirm) {
      this.setState({
        errorMessage: "Passwords Must Match"
      });
      return;
    } 
    this.setState({
      loading: true,
    }, () => {
      let newUserInfo = {
        username: this.state.username,
        password: this.state.password,
      }
      createAccount(e, newUserInfo)
        .then(convertResToJson)
        .then(checkIfAccountCreationError)
        .then(this.context.loginUser)
        .catch(err => {
          console.error(err);
        });
    });
  }

  setCreateAccountError = (message) => {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({ state }) => {
          return (
            <>
              <form 
                className="create-account-form" 
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}>
                {this.state.loading
                ? <LoadingSpinner />
                : <>
                  {this.state.errorMessage
                    ?<div className="error-message">{state.createAccountError}</div>
                    :undefined
                  }
                  <label className="create-account-form__label" htmlFor="username-input">Username</label>
                  <input 
                    id="create-username-input"
                    type="text"
                    onChange={(e) => this.handleTextInput(e)}
                    required/>

                  <label className="create-account-form__label" htmlFor="password-input">Password</label>
                  <input 
                    id="create-password-input" 
                    type="password" 
                    onChange={(e) => this.handleTextInput(e)}
                    required />

                  <label className="create-account-form__label" htmlFor="password-confirm-input">Confirm Password</label>
                  <input 
                    id="create-password-confirm-input" 
                    type="password" 
                    onChange={(e) => this.handleTextInput(e)}
                    required/>
                  </>
                }
                {this.state.errorMessage
                ? <div className="error-message">{this.state.errorMessage}</div>
                : ""}
                <input className="create-account-form__submit" type="submit" value="Create Account"/>
              </form>
            </>
          )
        }}
      </GlobalContext.Consumer>
    )
  };
}

CreateAccountForm.contextType = GlobalContext;
