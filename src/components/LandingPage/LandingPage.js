import React from 'react';
import HeroImage from './HeroImage'


export default function LandingPage({ history }) {
  return (
    <div className="landing-page-container">
      <HeroImage />
      <main className="landing-page__main-content">
        <div className="landing-page__copy">
          <h3>Motiv8 is a random quote generator.</h3>
          <ul className="landing-page__list">
            <li className="landing-page__list-item">
              <i className="fas fa-palette landing-page__icon"></i>
              <span className="landing-page__list-copy">Create unique quote, font, and background image pairings.</span>
            </li>
            <li className="landing-page__list-item">
              <i className="fas fa-user-circle landing-page__icon"></i>
              <span className="landing-page__list-copy">Create an account and save your favorite combos.</span>
            </li>
          </ul> 
        </div>
      </main>
      <button className="btn get-started-button" onClick={() => history.push('/quotes')}>Get Started</button>

    </div>
  )
}
