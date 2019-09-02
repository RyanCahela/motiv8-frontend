import React from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContextManager';

export default function UserMenu(props) {

  return (
    <GlobalContext.Consumer>
      {({ GlobalState, GlobalMethods }) => {
          return (
            <ul className="user-menu">
              <NavLink 
                className="user-menu__list-item__link" 
                to={`/user/${GlobalState.username}`} 
                onClick={GlobalMethods.toggleMenuIsOpen}
              >
                <li className="user-menu__list-item">
                  Profile
                </li>
              </NavLink>
              <NavLink 
                className="user-menu__list-item__link" 
                to={'/quotes'} 
                onClick={GlobalMethods.toggleMenuIsOpen}
              >
                <li className="user-menu__list-item">
                  Quote Generator
                </li>
              </NavLink>
              <NavLink 
                className="user-menu__list-item__link" 
                to={'/'} 
                onClick={() => {
                  GlobalMethods.logoutUser();
                  props.setMenuIsOpen(false);
                }}
              >
                <li className="user-menu__list-item">
                  Log Out
                </li>
              </NavLink>
            </ul>
          )
      }}
    </GlobalContext.Consumer>
  )
}

UserMenu.contextType = GlobalContext;
