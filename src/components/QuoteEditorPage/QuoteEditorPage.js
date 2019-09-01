import React from 'react'
import QuoteDisplay from './QuoteDisplay';
import QuoteControls from './QuoteControls';
import QuoteNav from './QuoteNav';

export default function QuoteEditorPage() {
  return (
    <div className="container">
      <QuoteControls />
      <QuoteDisplay />
      <QuoteNav />
    </div>
  )
}
