import React from 'react';

const Quote = ({ text, author, movie }) => {
    return (
        <div id='quote-content' className='quote'>
            <p id='text' className='item'>"{ text }"</p>
            <h5 id='author' className='item'>-{ author }</h5>
            <h6 id='movie' className='item'>({ movie })</h6>
        </div>

    );
}

export default Quote;