import React from 'react'
import './Ep.css'

import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import episodeData from '../../EpisodeData.json'
import { v4 as uuidv4 } from 'uuid'

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
                        <h2><a href={epInfo.listenLink}>Stream this episode</a></h2>
                    </div>
                )
            })
        }
    </div>
    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Ep