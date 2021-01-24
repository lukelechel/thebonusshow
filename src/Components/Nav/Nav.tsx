import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const navLibrary = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Episodes",
        link: "/ep"
    },
    {
        title: "Feedback",
        link: "/feedback"
    }
]

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (<div id="nav-container">
        <div id="desktop-nav" className="desktopOnly">
            <ul>
                {navLibrary.map(x => (
                    <li key={x.title}>
                        <Link to={x.link}>
                           {x.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div id="mobile-nav" className="mobileOnly">
            <svg viewBox="0 0 100 75" width="35" height="35"
                id="menuIcon"
                onClick={toggleMenu}>
                <rect width="100" height="11" rx="4"></rect>
                <rect y="30" width="100" height="11" rx="4"></rect>
                <rect y="60" width="100" height="11" rx="4"></rect>
            </svg>
            <div className={menuOpen === true ? 'visible' : 'invisible'}>
                <ul>
                    {navLibrary.map(x => (
                        <li key={x.title}>
                            <Link to={x.link}>
                                {x.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>)
}