import React from 'react'
import FavoritesList from '../components/UserProfilePage/FavoritesList.js';

export default class UserProfilePage extends React.Component{

  componentDidMount() {
    this.props.getUpdatedSavedQuotes(this.props.userId);
  }

  render() {
    return (
      <div className="container">
        <FavoritesList history={this.props.history}/>
      </div>
    )
  }
}

