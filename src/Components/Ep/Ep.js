import React from 'react'
import './Ep.css'

import NavBar from '../NavBar/NavBar'
import LeftCoverArt from '../LeftCoverArt/LeftCoverArt'
import episodeData from '../../EpisodeData.json'
import { v4 as uuidv4 } from 'uuid';

const getUniqueKey = () => {
    return uuidv4()
}

class Ep extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="leftRightContainer">
                    <LeftCoverArt />
                    <div>
                        <h1 id="allEpsPageLabel">All Episodes</h1>
                        {
                            episodeData.slice(0).reverse().map((epInfo) => {
                                let episodeId = `ep${epInfo.id}`
                                return (
                                    <div id={episodeId} className="episodeListing" key={getUniqueKey()}>
                                        <a href={`/ep/${epInfo.id}`}><h1>{epInfo.id}: {epInfo.title}</h1></a>
                                        <h2>{epInfo.publishDate}</h2>
                                        <p>{epInfo.description}</p>
                                        <p id="episodeStreamLink">
                                            <a
                                                href={epInfo.listenLink}
                                                alt={`Listen to ${epInfo.title}`}>
                                                Stream this episode
                                            </a>
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Ep