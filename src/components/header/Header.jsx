import React from 'react'
import './header.css'

import {Link} from 'react-router-dom'

import Logo from './Logo' 

const Header = () =>{

    return(
        <div id="header">
            <div className="container">
                <div className="links-left-box">
                    <Link to="/" className="link">
                        <p>Buy</p>
                    </Link>
                    <Link to="/" className="link">
                        <p>Rent</p>
                    </Link>
                    <Link to="/" className="link">
                        <p>Sell</p>
                    </Link>
                    <Link to="/homeloans" className="link">
                        <p>Home Loans</p>
                    </Link>
                    <Link to="/agentfinder" className="link">
                        <p>Agent Finder</p>
                    </Link>
                </div>
                <div className="logo-box">
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="links-right-box">
                    <Link to="/" className="link">
                        <p>Manage Rentals</p>
                    </Link>
                    <Link to="/" className="link">
                        <p>Advertise</p>
                    </Link>
                    <Link to="/" className="link">
                        <p>Help</p>
                    </Link>
                    <Link to="/" className="link">
                        <p>Sign In</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header