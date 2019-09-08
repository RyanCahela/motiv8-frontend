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
  }

  setMenuIsOpen = (bool) => {
    this.setState((currentState) => {
      return {
        menuIsOpen: bool
      }
    })
  }

  capitalizeFirstLetter(string) {
    if(!typeof string === 'string') throw new Error('argument must be a string');
    let firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1, string.length);
  }
  
  render() {
    return (
      <GlobalContext.Consumer>
        {({ GlobalState }) => {
          const { menuIsOpen } = this.state;
            return (
              <div className="menu-container">
                <header className="menu">
                  <button className="menu__button" onClick={() => this.setMenuIsOpen(!menuIsOpen)}>
                    <span>{ menuIsOpen ? 'Close' : 'Menu' }</span>
                  </button>
                  <div className="menu__greeting">
                    { GlobalState.userIsLoggedIn ? `Welcome ${this.capitalizeFirstLetter(GlobalState.username)}`: ''}
                  </div>
                    { menuIsOpen 
                      ? GlobalState.userIsLoggedIn 
                        ? <UserMenu {...this.props} setMenuIsOpen={this.setMenuIsOpen}/> 
                        : <AccountAccessForms {...this.props} setMenuIsOpen={this.setMenuIsOpen}/>
                      : ''
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
