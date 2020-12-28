import React from 'react'
import './Ep.css'

import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import episodeData from '../../EpisodeData.json'
import { v4 as uuidv4 } from 'uuid'

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
            episodeData.slice(0).reverse().map((epInfo) => {
                let episodeId = `ep${epInfo.id}`
                return (
                    <div id={episodeId} className="episodeListing" key={uuidv4()}>
                        <a href={`/ep/${epInfo.id}`}><h1>{epInfo.id}: {epInfo.title}</h1></a>
                        <h2>{epInfo.publishDate}</h2>
                        <p>{epInfo.description}</p>
                        <ActionButton emoji="⚡️" text={`Stream episode ${epInfo.id}`} link={epInfo.listenLink} />
                    </div>
                )
            })
        }
    </div>

    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Ep