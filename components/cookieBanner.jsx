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
        <div>
            <div className='normal_screenshots'>
                <div className='cookies_card custom_blur custom_border d-flex flex-column justify-content-center align-items-start'>
                    <p className='m-0'>By continuing to use our website,</p>
                    <p className='m-0'>
                        you agree to our <a href="/privacy-policy" className='text_white'>Privacy Policy</a>
                    </p>
                    <button className='mt-2 w_100 custom_btn text_white' onClick={acceptCookies}>
                        Accept
                    </button>
                </div>
            </div>

            <div className='responsive_screenshots'>
                <div className='cookies_card custom_blur custom_border d-flex flex-column justify-content-center align-items-start'>
                    <p className='m-0'>By continuing to use our website, you agree to our <a href="/privacy-policy" className='text_white'>Privacy Policy</a></p>
                    <button className='mt-2 w_100 custom_btn text_white' onClick={acceptCookies}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner