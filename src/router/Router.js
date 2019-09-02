import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../components/Header/Menu';
import LandingPage from '../components/LandingPage/LandingPage';
import QuoteEditorPage from '../components/QuoteEditorPage/QuoteEditorPage';
import UserProfilePage from '../components/UserProfilePage/UserProfilePage';
import { GlobalContext } from '../contexts/GlobalContextManager';

export default function Router(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={Menu} />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quotes" component={QuoteEditorPage} />
        <GlobalContext.Consumer>
          {({ GlobalState, GlobalMethods }) => {
            const { getUpdatedSavedQuotes } = GlobalMethods;
            const { userId } = GlobalState;

            return (
              <Route 
                path="/user/:username" 
                render={(props) => <UserProfilePage
                  {...props}
                  getUpdatedSavedQuotes={getUpdatedSavedQuotes}
                  userId={userId}/>} 
                />
            )
          }}
        </GlobalContext.Consumer>
      </Switch>
    </BrowserRouter>
  )
}
