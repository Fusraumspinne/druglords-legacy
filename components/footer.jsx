import React from 'react'

function Footer() {
  return (
    <div className='gradient_background mt-5'>
        <div className='text_white d-flex justify-content-between align-items-center'>
            <p className='fs-3 fw-semibold ms-4 pt-2'>Druglord&apos;s Legacy</p>
            <a className='me-4 pt-2 text_white' href="https://discord.gg/82HdVhnUZT">Discord</a>
        </div>
        <div className='custom_divider'/>
        <div className='text_white d-flex justify-content-between align-items-center mt-2'>
            <p className='ms-4'>2024, Druglord&apos;s Legacy</p>
            <a className='me-4 text_white' href="/privacy-policy">Privacy Policy</a>
        </div>
    </div>
  )
}

export default Footer