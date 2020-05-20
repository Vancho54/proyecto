import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { current_year } from '../../config'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/' className='flogo'>
                <img alt='nba logo' src='/images/nba_logo.png' />
            </Link>
            <div className='right'>
                @NBA {current_year} All rights reserved.
            </div>
        </div>
    )
}

export default Footer