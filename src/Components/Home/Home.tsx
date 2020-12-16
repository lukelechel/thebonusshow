import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'

import NavBar from '../NavBar/NavBar'
import LeftCoverArt from '../LeftCoverArt/LeftCoverArt'
import episodeData from '../../EpisodeData.json'
import ActionButton from '../ActionButton/ActionButton'

import { v4 as uuidv4 } from 'uuid'

const Home = () => (<div>
    <NavBar />
    <LeftCoverArt />
    <h1 id="showDescription">A podcast from <a href="https://lukelechel.com" rel="noopener noreferrer">Luke Lechel</a> about technology, productivity, and fitness.</h1>
    <div id="recentEpisodesSection">
        <h1 id="recentEpsLabel">Recent episodes:</h1>
        {
            episodeData.slice(0).reverse().map((epInfo, index) => {
                let episodeId = `ep${epInfo.id}`
                if (index < 3) {
                    return (
                        <div id={episodeId} className="episodeListing" key={uuidv4()}>
                            <h1><Link to={`/ep/${epInfo.id}`}>{epInfo.id}: {epInfo.title}</Link></h1>
                            <h2>{epInfo.publishDate}</h2>
                            <p>{epInfo.description}</p>
                            <ActionButton link={epInfo.listenLink} alt={`Listen to ${epInfo.title}`} message="Stream this episode" />
                        </div>
                    )
                } else {
                    return null
                }
                
            })
        }
    </div>
</div>)

export default Home