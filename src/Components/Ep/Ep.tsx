import React from 'react'
import './Ep.css'
import GetAllEpisodes from '../GetAllEpisodes/GetAllEpisodes'

import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'

export const ActionButton = (props: {emoji:string, text:string, link:string}) => (<div id="actionbutton-container">
    <a href={props.link} rel="noopener noreferrer">
        <span id="action-emoji">{props.emoji}</span>
        {props.text}
    </a>
</div>)

const Ep = () => (<div>
    <Nav />
    <div className="desktopOnly"><CoverArt /></div>

    <div>
        <h1 id="allEpsPageLabel">All Episodes</h1>
        {
            <GetAllEpisodes />
        }
    </div>

    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Ep