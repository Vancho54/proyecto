import React from 'react'
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sidenavitems'

const SideNavigaton = (props) => {

    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '220px',

                }}
            >
                <SideNavItems />
            </SideNav>
        </div>
    )
}

export default SideNavigaton;