import React from 'react'
import FavoritesList from './FavoritesList.js';

export default class UserProfilePage extends React.Component{

  constructor(props) {
    super(props);
    this.history = props.history
  }

  componentDidMount() {
    this.props.getUpdatedSavedQuotes('Demo');
  }

  render() {
    return (
      <div className="container">
        <FavoritesList history={this.props.history}/>
      </div>
    )
  }
}

