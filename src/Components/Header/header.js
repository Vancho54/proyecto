import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideNav from './SideNav/sidenav'

const Header = (props) => {

    const navBars = () => {

        return(
            <div className='bars'>
                <FontAwesomeIcon icon={faBars} 
                    onClick={props.onShowNav}
                    style={{
                        color: '#dfdfdf',
                        padding: '10px',
                        cursor: 'pointer'
                }}/>
            </div>
        )
    }

    const logo = () => {

        return(
            <Link to='/' className='logo'>
                <img alt='nba logo' src='/images/nba_logo.png' />
            </Link>
        )
    }

    return (
        <header className='Header'>
            <SideNav {...props} />
            <div className='Headerop'>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header