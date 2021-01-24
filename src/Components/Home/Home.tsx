import React from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import epDataFetcher from '../EpDataFetcher/EpDataFetcher'
import { Link } from 'react-router-dom'
import { ActionButton } from '../Ep/Ep'

const awsResourceUriPrefix = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/"

const Title = () => (<div id="titleSection">
    <img
        srcSet={`${awsResourceUriPrefix}thebonusshow-cover-small.png 400w,
                ${awsResourceUriPrefix}thebonusshow-cover-medium.png 1000w`}
        src={`${awsResourceUriPrefix}thebonusshow-cover-full.jpg`}
        alt="The Bonus Show cover art"
        id="coverart" />
    <h1>The Bonus Show</h1>
    <h2>Level up your tech, productivity, and fitness.</h2>
</div>)

const Home = () => (<div id="home">
    <Nav />
    <Title />
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
</div>)

export default Home