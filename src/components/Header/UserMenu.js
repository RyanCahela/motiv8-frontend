import React from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContextManager';


export default function UserMenu(props) {

  return (
    <GlobalContext.Consumer>
      {({ state, methods }) => {
          return (
            <ul className="user-menu">
              <NavLink 
                className="user-menu__list-item__link" 
                to={`/user/${state.username}`} 
                onClick={() => methods.toggleMenuIsOpen()}
              >
                <li className="user-menu__list-item">
                  Profile
                </li>
              </NavLink>
              <NavLink 
                className="user-menu__list-item__link" 
                to={'/quotes'} 
                onClick={() => methods.toggleMenuIsOpen()}
              >
                <li className="user-menu__list-item">
                  Quote Generator
                </li>
              </NavLink>
              <NavLink 
                className="user-menu__list-item__link" 
                to={'/'} 
                onClick={() => methods.logoutUser()}
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
