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

  handleSubmit(e, methods) {
    if(!this.state.username || !this.state.password) {
      this.setState({
        errorMessage: "Please fill enter a username and password."
      })
    }
    methods.loginUser(e, this.state);
  }

  render() {

    return (
      <GlobalContext.Consumer>
        {({methods}) => {
          return (
            <div>
            <div className="demo-credentials">
              <h5>Demo Credentials</h5>
              <div>Login: Demo</div>
              <div>Pass: Demo123</div>
            </div>
            <form className="input-form" onSubmit={(e) => this.handleSubmit(e, methods)}>
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
              {this.state.errorMessage
              ? <div className="error-message">{this.state.errorMessage}</div>
              : ""
              }
              <input className="input-form__submit" type="submit" value="Sign In"/>
            </form>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
