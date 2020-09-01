import React from 'react'
import './EpisodePage.css'

import NavBar from './NavBar'
import LeftCoverArt from './LeftCoverArt'
import episodeData from './EpisodeData.json'

import { v4 as uuidv4 } from 'uuid';

const getUniqueKey = () => {
    return uuidv4()
}

class EpisodePage extends React.Component {

    generateHtmlString(showNote) {
        if (showNote.isLink) {
            return (
                console.log(showNote)
            )
        } else {
            return (
                console.log(showNote)
            )
        }
    }

    getShowNotes() {
        const { match: { params } } = this.props
        const episodeNumber = params.id
        const selectedEpisode = episodeData.find(episodeRaw => episodeRaw.id === episodeNumber)
        const selectedEpShowNotesArray = selectedEpisode.showNotes

        return selectedEpShowNotesArray.map(showNote => {
            if (showNote.isLink === null) {
                return (<p key={getUniqueKey()}>{null}</p>)
            } else if (showNote.isLink) {
                return (<p key={getUniqueKey()}><a href={showNote.link} alt={showNote.alt}>{showNote.title}</a></p>)
            } else {
                return (<p key={getUniqueKey()}>{showNote.straightUpText}</p>)
            }
        })
    }

    episodeInfoContent() {
        const { match: { params } } = this.props
        const episodeNumber = params.id
        let selectedEpisode = episodeData.filter(episodeRaw => episodeRaw.id === episodeNumber)[0]

        return (
            <div id="episodeInfo">
                <h1 id="episodeTitle">{selectedEpisode.id}: {selectedEpisode.title}</h1>
                <h2 id="episodePublishDate">{selectedEpisode.publishDate}</h2>
                <p id="episodeDescription">{selectedEpisode.description}</p>
                <p id="episodeStreamLink">
                    <a
                        href={selectedEpisode.listenLink}
                        alt={`Listen to ${selectedEpisode.title}`}>
                        Stream this episode
                    </a>
                </p>
                <h1 id="showNotesTitle">Show Notes</h1>
                {
                    this.getShowNotes()
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="leftRightContainer">
                    <LeftCoverArt />
                    <div id="episodeInfoContainer">
                        {this.episodeInfoContent()}
                    </div>
                </div>
            </div>
        )
    }
}

export default EpisodePage