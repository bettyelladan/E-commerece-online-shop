import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers To Your Email</h1>
            <p>Subscribe To Our NewsLetter and Stay Updated</p>
           <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
            </div> 
        </div>

    )
}

export default NewsLetter