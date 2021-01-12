import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActionButton } from '../Ep/Ep'

const epDataEndpoint = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/EpisodeData.json"

interface EpDataBase {
    id: string,
    title: string,
    publishDate: string,
    description: string,
    listenLink: string,
    showNotes: []
}

function fetchEpData() {
    return fetch(epDataEndpoint)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default function GetMostRecentEpisodes() {
    const [epDataArray, setEpDataArray] = useState<EpDataBase[]>([])

    useEffect(() => {
        fetchEpData().then(rawData => setEpDataArray(rawData))
    }, [])

    return (<div>
        {epDataArray.slice(0).reverse().map((x, i) => {
            let episodeId = `ep${x.id}`
            if (i < 3) {
                return (
                    <div id={episodeId} className="episodeListing" key={i}>
                        <h1><Link to={`/ep/${x.id}`}>{x.id}: {x.title}</Link></h1>
                        <h2>{x.publishDate}</h2>
                        <p>{x.description}</p>
                        <ActionButton emoji="⚡️" text={`Stream episode ${x.id}`} link={x.listenLink} />
                    </div>
                )
            } else {
                return null
            }
        })}
    </div>)
}