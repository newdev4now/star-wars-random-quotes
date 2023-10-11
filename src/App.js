import React, { useState } from 'react';
import { quoteData } from './components/quote-box/quote-data.js';
import { randomColors } from './components/quote-box/random-colors.js';
import QuoteBox from './components/quote-box/quote-box.js';
import './App.css';




/* const getRandomIndex = (max) =>
   Math.floor(Math.random() * ((quoteData.length-1) - 0) + 0); */

const getRandomIndex = (max) => Math.floor(Math.random() * (quoteData.length));

function App () {
  const [quote, setQuote] = useState(quoteData[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  let backgroundColor = document.body.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  let color = backgroundColor;
  document.body.style.color = color;

  let text = quote.text;
  let author = quote.author;
  let movie = quote.movie;

  return (
    <div id="app" className="App">
      <div className='wrapper'>
        <QuoteBox handleNewQuote={ handleNewQuote } quote={ quote } text={ text } author={ author } movie={ movie } />
      </div>
    </div>
  );
}

export default App;
