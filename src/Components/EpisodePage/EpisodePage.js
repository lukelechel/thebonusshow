import React from 'react'
import './EpisodePage.css'

import NavBar from '../NavBar/NavBar'
import LeftCoverArt from '../LeftCoverArt/LeftCoverArt'
import episodeData from '../../EpisodeData.json'
import ActionButton from '../ActionButton/ActionButton'

import { useParams } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

const EpisodePage = () => {
    const { id } = useParams()
    const episodeInfo = episodeData.find(x => x.id === id)
    return (<div>
        <NavBar />
        <div className="leftRightContainer">
            <LeftCoverArt />
            <div id="episodeInfoContainer">
                <EpisodeListing episodeInfo={episodeInfo} />
            </div>
        </div>
    </div>)
}

const EpisodeListing = ({episodeInfo}) => (<div id="episodeInfo">
    <h1 id="episodeTitle">{episodeInfo.id}: {episodeInfo.title}</h1>
    <h2 id="episodePublishDate">{episodeInfo.publishDate}</h2>
    <p id="episodeDescription">{episodeInfo.description}</p>
    <ActionButton link={episodeInfo.listenLink} alt={`Listen to ${episodeInfo.title}`} message="Stream this episode" />

    <h1 id="showNotesTitle">Show Notes</h1>
    <div id="showNotes-container">
        {
            episodeInfo.showNotes.map(x => <ShowNoteItem showNoteItem={x} key={getUniqueKey()} />)
        }
    </div>
</div>)

const ShowNoteItem = ({showNoteItem}) => (<p>
    {
        showNoteItem.isLink ?
            (<a href={showNoteItem.link} alt={showNoteItem.alt}>{showNoteItem.title}</a>)
            :
            (showNoteItem.straightUpText)
    }
</p>)

const getUniqueKey = () => uuidv4()

export default EpisodePage