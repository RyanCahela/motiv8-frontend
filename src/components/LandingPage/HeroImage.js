import React, {useState} from 'react'

export default function HeroImage() {

  let splashQuotes = [{
    quote: `“Do not fear the winds of adversity. Remember, a kite 
    rises against the wind rather than with it.”`,
    author: 'Unknown'
  }]

  const [currentQuote, setCurrentQuote] = useState(splashQuotes[0]);
  
  return (
    <div className="landing-page__splash">
      <h1 className="landing-page__header">Motiv8</h1>  
      <div className="splash-animation">
        <div className="splash-quote">{currentQuote.quote}</div>
        <div className="splash-quote-author">{currentQuote.author}</div>
      </div>
    </div>
  )
}
