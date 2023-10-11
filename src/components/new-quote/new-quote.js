import React from 'react';

const NewQuote = ({ handleNewQuote }) => {
    return (
        <button
            id='new-quote'
            className='btn'
            onClick={ handleNewQuote }
        >
            New Quote
        </button>

    );
}

export default NewQuote;