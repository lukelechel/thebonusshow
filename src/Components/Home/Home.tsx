import React from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import epDataFetcher from '../EpDataFetcher/EpDataFetcher'
import { Link } from 'react-router-dom'
import { ActionButton } from '../Ep/Ep'

const Home = () => (<div>
    <Nav />
    <div className="desktopOnly"><CoverArt /></div>
        <div id="recentEpisodesSection">
            <h1 id="recentEpsLabel">Recent episodes</h1>
            {
                epDataFetcher().slice(0).reverse().map((x, i) => {
                    let episodeId = `ep${x.id}`
                    return (
                        i < 3 ? (
                            <div id={episodeId} className="episodeListing" key={i}>
                                <h1><Link to={`/ep/${x.id}`}>{x.id}: {x.title}</Link></h1>
                                <h2>{x.publishDate}</h2>
                                <p>{x.description}</p>
                                <ActionButton emoji="⚡️" text={`Stream episode ${x.id}`} link={x.listenLink} />
                            </div>
                        ) : null
                    )
                })
            }
        </div>
    <div className="mobileOnly"><CoverArt /></div>
</div>)

export default Home