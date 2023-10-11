import React from 'react';
import Quote from '../quote/quote.js';
import NewQuote from '../new-quote/new-quote.js';
import TweetQuote from '../tweet-quote/tweet-quote.js';
import './quote-box.css';
import '../quote/quote.css';

const QuoteBox = ({ quote, text, author, movie, handleNewQuote }) => (



    <div id='quote-box' className='container'>
        <Quote quote={ quote } text={ text } author={ author } movie={ movie } />
        <div id='btn-row' className='btn-row'>
            <NewQuote handleNewQuote={ handleNewQuote } />
            <TweetQuote />
        </div>
    </div>
);

export default QuoteBox;
