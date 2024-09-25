"use client"

import React from 'react'
import { useState } from 'react'

function CookieBanner() {
    const [accepted, setAccepted] = useState(false);

    const acceptCookies = () => {
        setAccepted(true);
    };

    if (accepted) {
        return null;
    }

    return (
        <div className='banner-card d-flex flex-column justify-content-center align-items-start text-success'>
            <p className='m-0'>By continuing to use our website,</p>
            <p className='m-0'>
                you agree to our <a href="/privacy-policy" className='text-success'>Privacy Policy</a>
            </p>
            <button className='banner-button mt-2 button-100 text-success' onClick={acceptCookies}>
                Accept
            </button>
        </div>
    );
}

export default CookieBanner