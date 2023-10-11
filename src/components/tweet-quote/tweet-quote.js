import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import './tweet-quote.css';


const TweetQuote = () => {
    return (
        <a
            href='https://twitter.com/intent/tweet'
            id='tweet-quote'
            target='_blank'
            rel='noopener noreferrer'
            className='btn'
        >
            <FaXTwitter />
        </a>
    );
}

export default TweetQuote;