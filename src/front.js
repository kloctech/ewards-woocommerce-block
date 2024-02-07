import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './components/user-otp';

window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.mt-block-user-card-wrapper')
    console.log('document was not ready, place code here');
    if (cards) {
        Array.from(cards).forEach(card => {
            const attributes = JSON.parse(card.dataset.mtAttributes)
            ReactDOM.hydrate(
                <MyButton attributes={attributes} />,
                card
            )
        })
    }
})