import React, { Component } from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';

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

  componentWillUnmount() {
    let { methods } = this.context;
    methods.setCreateAccountError('');
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

  handleSubmit(e, methods) {
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
      methods.createAccount(e, this.state, this);
    });

  }

  render() {
    return (
      <GlobalContext.Consumer>
        {({ methods, state }) => {
          return (
            <>
              <form 
                className="create-account-form" 
                onSubmit={(e) => {
                  this.handleSubmit(e, methods);
                }}>
                {this.state.loading
                ? <LoadingSpinner />
                : <>
                  {state.createAccountError
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
