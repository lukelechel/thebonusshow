import React from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import GetMostRecentEpisodes from '../GetMostRecentEpisodes/GetMostRecentEpisodes'

const Home = () => (<div>
    <Nav />
    <div className="desktopOnly"><CoverArt /></div>
        <div id="recentEpisodesSection">
            <h1 id="recentEpsLabel">Recent episodes</h1>
            <GetMostRecentEpisodes />
        </div>
    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Home