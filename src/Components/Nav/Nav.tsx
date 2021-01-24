import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const navigationLibrary = [
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

const Nav = () => (<div id="nav-container">
    <ul id="nav-items">
        {navigationLibrary.map(x => (
            <li key={x.title}>
                <Link to={x.link}>
                    {x.title}
                </Link>
            </li>
        ))}
    </ul>
</div>)

export default Nav