import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import episodeData from '../../EpisodeData.json'

import { v4 as uuidv4 } from 'uuid'

const Home = () => (<div>
    <Nav />
    <div className="desktopOnly"><CoverArt /></div>
        <div id="recentEpisodesSection">
            <h1 id="recentEpsLabel">Recent episodes</h1>
            {
                episodeData.slice(0).reverse().map((epInfo, index) => {
                    let episodeId = `ep${epInfo.id}`
                    if (index < 3) {
                        return (<div id={episodeId} className="episodeListing" key={uuidv4()}>
                            <h1><Link to={`/ep/${epInfo.id}`}>{epInfo.id}: {epInfo.title}</Link></h1>
                            <h2>{epInfo.publishDate}</h2>
                            <p>{epInfo.description}</p>
                            <h2><a href={epInfo.listenLink}>Stream this episode</a></h2>
                        </div>)
                    } else {
                        return null
                    }
                    
                })
            }
        </div>
    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Home