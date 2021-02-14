import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const navLibrary = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Episodes",
        link: "/ep"
    },
    {
        name: "Feedback",
        link: "/feedback"
    }
]

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (<div id="nav-container">
        <ul id="desktop-nav" className="desktopOnly">
            {
                navLibrary.map(x => <li key={x.name}>
                    <Link to={x.link} onClick={toggleMenu}>{x.name}</Link>
                </li>)
            }
        </ul>
        
        <div id="mobile-nav">
            <div id="mobile-nav-top">
                <svg viewBox="0 0 100 75" width="35" height="35"
                    id="menuIcon"
                    onClick={toggleMenu}>
                    <rect width="100" height="11" rx="4"></rect>
                    <rect y="30" width="100" height="11" rx="4"></rect>
                    <rect y="60" width="100" height="11" rx="4"></rect>
                </svg>
                <h1><Link to="/">The Bonus Show</Link></h1>
            </div>

            <ul id="mobile-nav-list" className={menuOpen === true ? 'visible' : 'invisible'}>
                {
                    navLibrary.map(x => {return (
                        <li key={x.name}>
                            <Link to={x.link} onClick={toggleMenu}>{x.name}</Link>
                        </li>
                    )})
                }
            </ul>
        </div>
    </div>)
}
