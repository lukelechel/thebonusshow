import React from 'react'
import './IndividualEpisode.css'
import EpDataFetcher from '../EpDataFetcher/EpDataFetcher'
import { useParams } from 'react-router-dom'
import ActionButton from '../ActionButton/ActionButton'

const IndividualEpisode = () => {
    const { id } = useParams()
    const thisEpisodeInfo = EpDataFetcher().find(x => x.id === id)
    return (<div id="individual-episode">
        {
            thisEpisodeInfo ? (
                <div>
                    <h1>Episode {thisEpisodeInfo.id}</h1>
                    <h2>{thisEpisodeInfo.title}</h2>
                    <h3>{thisEpisodeInfo.publishDate}</h3>
                    <p>{thisEpisodeInfo.description}</p>
                    <ActionButton emoji="⚡️" text={`Stream Episode ${thisEpisodeInfo.id}`} link={thisEpisodeInfo.listenLink} />
                
                    <div id="show-notes">
                        <h1>Show Notes</h1>
                        <ul>
                            {thisEpisodeInfo.showNotes.map((x, i) => (
                                x.isLink ?
                                <li key={i}><a href={x.link} title={x.title}>{x.title}</a></li>
                                :
                                <li key={i}>{x.straightUpText}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null
        }
    </div>)
}

export default IndividualEpisode