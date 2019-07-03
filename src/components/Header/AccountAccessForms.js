import React from 'react'
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';

export default class AccountAccessForms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isInCreateAccountMode: false
    }

    this.setIsInCreateAccountModeFalse = this.setIsInCreateAccountModeFalse.bind(this);
  }


  setIsInCreateAccountModeTrue() {
    this.setState({
      isInCreateAccountMode: true
    })
  }

  setIsInCreateAccountModeFalse() {
    this.setState({
      isInCreateAccountMode: false
    })
  }

  render() {

      let signInBg, createAccountBg;
      if(this.state.isInCreateAccountMode) {
        signInBg = '';
        createAccountBg = 'highlight';
      }
      else {
        signInBg = 'highlight';
        createAccountBg = '';
      }


      return (
        <div className="account-access-forms">
          <button className={`account-access-forms__button ${signInBg}`} onClick={() => this.setIsInCreateAccountModeFalse()}>Sign In</button>
          <button className={`account-access-forms__button ${createAccountBg}`} onClick={() => this.setIsInCreateAccountModeTrue()}>Create Account</button>
          <div className="account-access-forms__selected-form">
            {this.state.isInCreateAccountMode? 
              <CreateAccountForm setIsInCreateAccountModeFalse={this.setIsInCreateAccountModeFalse}/>
              :
              <LoginForm />}
          </div>
        </div>
      )

  }
}
