import React, { Component } from 'react'
import { GlobalContext } from '../../contexts/GlobalContextManager';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    }
  }

  componentWillUnmount() {
    this.setErrorMessage('');
  }

  handleTextInput(e) {
    switch (e.target.id) {
      case 'username-input':
        this.setState({
          username: e.target.value
        })
        break;
      case 'password-input':
        this.setState({
          password: e.target.value
        })
        break;
      default:
          console.error("onChange id not found in login form");
    }
  }

  setErrorMessage = (message) => {
    this.setState({
      errorMessage: message
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { GlobalMethods } = this.context;
    const { username, password } = this.state;

    if(!username || !password) {
      this.setErrorMessage("Please fill enter a username and password.");
      return;
    }

    GlobalMethods.loginUser({
      username: this.state.username.toLowerCase(),
      password: this.state.password
    })
    .then(() => this.props.history.push('/quotes'))
    .then(() => this.props.setMenuIsOpen(false))
    .catch(err => {
      this.setErrorMessage(err);
    });
  }

  render() {
    const { errorMessage } = this.state 
    return (
      <div>
        <div className="demo-credentials">
          <h5>Demo Credentials</h5>
          <div>Login: Demo</div>
          <div>Pass: Demo123</div>
        </div>
        {errorMessage
          ? <div className="error-message">{errorMessage}</div>
          : ''
        }
        <form className="input-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label className="input-form__label" htmlFor="username-input">Username</label>
          <input 
            id="username-input"
            type="text"
            onChange={(e) => this.handleTextInput(e)}
            required/>

          <label className="input-form__label" htmlFor="password-input">Password</label>
          <input 
            id="password-input" 
            type="password" 
            onChange={(e) => this.handleTextInput(e)}
            required />
          <input className="input-form__submit" type="submit" value="Sign In"/>
        </form>
      </div>
    )
  }
}

LoginForm.contextType = GlobalContext;