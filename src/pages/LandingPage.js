import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="container landing-page-container">
      <h1 className="landing-page__header">Welcome to Motiv8</h1>  
        <main>
          <h2 className="landing-page__subheader">Customize your inspiration</h2>
          <div>
            Motiv8 is a random quote generator.
            <ul>
              <li>Users can create unique quote, font, and background image pairings.</li>
              <li>If a user chooses to create an account they will have the ability to save their favorite quotes to their profile.</li>
            </ul> 
          </div>
          <Link to={'/quotes'}>
            <button className="get-started-button">Get Started!</button>
          </Link>
        </main>
    </div>
  )
}
