import React from 'react'
import './EpisodePage.css'
import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import epDataFetcher from '../EpDataFetcher/EpDataFetcher'
import { useParams } from 'react-router-dom'
import { ActionButton } from '../Ep/Ep'

export default function EpisodePage() {
    const { id } = useParams()
    const thisEpisodeInfo = epDataFetcher().find(x => x.id === id)
    return (<div>
        <Nav />
        <div className="desktopOnly"><CoverArt /></div>
        {
            thisEpisodeInfo ? (
                <div id="episodeInfo">
                    <h1 id="episodeTitle">{thisEpisodeInfo.id}: {thisEpisodeInfo.title}</h1>
                    <h2 id="episodePublishDate">{thisEpisodeInfo.publishDate}</h2>
                    <p id="episodeDescription">{thisEpisodeInfo.description}</p>
                    <ActionButton emoji="⚡️" text={`Stream episode ${thisEpisodeInfo.id}`} link={thisEpisodeInfo.listenLink} />
                
                    <h1 id="showNotesTitle">Show Notes</h1>
                    <ul id="showNotes-container">
                        {thisEpisodeInfo.showNotes.map((x, i) => (
                            x.isLink ?
                            <a href={x.link} title={x.title} key={i}><li>{x.title}</li></a>
                            :
                            <li key={i}>{x.straightUpText}</li>
                        ))}
                    </ul>
                </div>
            ) : null
        }
    </div>)
}
