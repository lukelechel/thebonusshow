import React from 'react'
import './EpisodePage.css'

import Nav from '../Nav/Nav'
import CoverArt from '../CoverArt/CoverArt'
import episodeData from '../../EpisodeData.json'

import { useParams } from 'react-router-dom'

export default function EpisodePage() {
    const { id } = useParams()
    const episodeInfo = episodeData.find(x => x.id === id)
    return (<div>
        <Nav />
        <div className="desktopOnly"><CoverArt /></div>
        {
            episodeInfo ? (
                <div id="episodeInfo">
                    <h1 id="episodeTitle">{episodeInfo.id}: {episodeInfo.title}</h1>
                    <h2 id="episodePublishDate">{episodeInfo.publishDate}</h2>
                    <p id="episodeDescription">{episodeInfo.description}</p>
                    <p id="episodeDescription"><a href={episodeInfo.listenLink}>Stream this episode</a></p>
                
                    <h1 id="showNotesTitle">Show Notes</h1>
                    <ul id="showNotes-container">
                        {episodeInfo.showNotes.map((x, i) => (
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
