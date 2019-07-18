import React from 'react'
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';

export default class AccountAccessForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inCreateAccountMode: false
    }
  }

  setInCreateAccountMode = (bool) => {
    this.setState({
      inCreateAccountMode: bool
    });
  }

  render() {
    return (
      <div className="account-access-forms">
        <button 
          className={`account-access-forms__button ${this.state.inCreateAccountMode ? '' : 'highlight'}`} 
          onClick={() => this.setInCreateAccountMode(false)}>
            Sign In
        </button>
        <button 
          className={`account-access-forms__button ${this.state.inCreateAccountMode ? 'highlight' : ''}`} 
          onClick={() => this.setInCreateAccountMode(true)}>
            Create Account
        </button>
        <div className="account-access-forms__selected-form">
          {this.state.inCreateAccountMode ? 
            <CreateAccountForm setInCreateAccountMode={this.setInCreateAccountMode}/>
            :
            <LoginForm />}
        </div>
      </div>
    )
  }
}
