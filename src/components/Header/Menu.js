import React from 'react';
import AccountAccessForms from './AccountAccessForms';
import UserMenu from './UserMenu';
import { GlobalContext } from '../../contexts/GlobalContextManager';

export default class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuIsOpen: false,
      userIsLoggedIn: true
    }
    this.toggleMenuIsOpen = this.toggleMenuIsOpen.bind(this);
  }

  toggleMenuIsOpen() {
    this.setState((currentState) => {
      return {
        menuIsOpen: !currentState.menuIsOpen
      }
    })
  }
  
  render() {
    return (
      <GlobalContext.Consumer>
        {({ GlobalState, GlobalMethods }) => {
            return (
              <div className="menu-container">
                <header className="menu">
                  <button className="menu__button" onClick={GlobalMethods.toggleMenuIsOpen}>
                    <span>{ GlobalState.menuIsOpen ? 'Close' : 'Menu' }</span>
                  </button>
                  <div className="menu__greeting">
                    { GlobalState.userIsLoggedIn ? `Welcome ${GlobalState.username}`: ''}
                  </div>
                    { GlobalState.menuIsOpen ? 
                        GlobalState.userIsLoggedIn ? <UserMenu /> : <AccountAccessForms />
                        :
                        ''
                    }
                </header>
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }    
}
