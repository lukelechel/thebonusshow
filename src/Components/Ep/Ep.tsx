import React from 'react'
import './Ep.css'

import NavBar from '../NavBar/NavBar'
import LeftCoverArt from '../LeftCoverArt/LeftCoverArt'
import episodeData from '../../EpisodeData.json'
import ActionButton from '../ActionButton/ActionButton'
import { v4 as uuidv4 } from 'uuid'

const Ep = () => (<div>
    <NavBar />
    <LeftCoverArt />
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
                        <ActionButton link={epInfo.listenLink} alt={`Listen to ${epInfo.title}`} message="Stream this episode" />
                    </div>
                )
            })
        }
    </div>
</div>)

export default Ep