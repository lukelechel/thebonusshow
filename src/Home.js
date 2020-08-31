import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import LeftCoverArt from './LeftCoverArt'
import episodeData from './EpisodeData.json'

import { v4 as uuidv4 } from 'uuid';

const getUniqueKey = () => {
    return uuidv4()
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="leftRightContainer">
                    <LeftCoverArt />
                    <div>
                        <h1 id="showDescription">The Bonus Show is a new podcast from <a href="https://lukelechel.com" rel="noopener noreferrer">Luke Lechel</a> about minimalism, technology, and fitness.</h1>
                        <div id="recentEpisodesSection">
                            <h1 id="recentEpsLabel">Recent episodes:</h1>
                            {
                                episodeData.slice(0).reverse().map((epInfo, index) => {
                                    let episodeId = `ep${epInfo.id}`
                                    if (index < 3) {
                                        return (
                                            <div id={episodeId} className="episodeListing" key={getUniqueKey()}>
                                                <h1><Link to={`/ep/${epInfo.id}`}>{epInfo.id}: {epInfo.title}</Link></h1>
                                                <h2>{epInfo.publishDate}</h2>
                                                <p>{epInfo.description}</p>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                    
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home