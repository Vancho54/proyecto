import React, { Component } from 'react'
import './layout.css'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

class Layout extends Component {

    state = {
        showNav:false
    }

    togleNav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render () {
        return (
            <div>
                <Header 
                showNav={this.state.showNav}
                onHideNav={ () => this.togleNav(false)}
                onShowNav={ () => this.togleNav(true)} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout
