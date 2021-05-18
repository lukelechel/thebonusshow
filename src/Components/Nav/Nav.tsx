import { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const NavLibrary = [
    {
        name: "Home",
        onsitePath: ""
    }
]

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const HamburgerMenu = () => (<div id="hamburger-menu" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="95" height="10"></rect>
            <rect y="30" width="95" height="10"></rect>
            <rect y="60" width="95" height="10"></rect>
        </svg>
    </div>)

    return (<div id="nav-container">
        <div id="desktop-nav" className="desktopOnly">
            <ul>
                {NavLibrary.map((x, i) => (<li key={i}><Link to={`/${x.onsitePath}`} onClick={toggleMenu}>{x.name}</Link></li>))}
            </ul>
        </div>
        
        <div id="mobile-nav">
            <div id="mobile-nav-top">
                <HamburgerMenu />
            </div>

            <ul id="mobile-nav-list" className={menuOpen === true ? 'visible' : 'invisible'}>
                {NavLibrary.map((x, i) => (<li key={i}><Link to={`/${x.onsitePath}`} onClick={toggleMenu}>{x.name}</Link></li>))}
            </ul>
        </div>
    </div>)
}