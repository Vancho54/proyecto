import React from 'react'
import './sidenavitems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const SideNavItems = () => {

    const items = [
        {
        icon: faHome,
        text: 'Home',
        link: '/'
    },
    {
        icon: faFile,
        text: 'News',
        link: '/news'
    },
    {
        icon: faPlay,
        text: 'Video',
        link: '/video'
    },
    {
        icon: faSignInAlt,
        text: 'Sign In',
        link: '/sign-in'
    },
    {
        icon: faSignOutAlt,
        text: 'Sign Out',
        link: '/sign-out'
    }
]

const showitems = () => {
    return items.map((item, i) => {
        return( 
        <div key={i} className='Ops'>
            <Link to={item.link}>
                <FontAwesomeIcon className='fasb' icon={item.icon} />
                {item.text}
            </Link>
        </div>)
    })
}

    return (
        <div>
            {showitems()}
        </div>
    )
}

export default SideNavItems