import React, { useState, useEffect } from 'react'
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

export default function GetAllEpisodes() {
    const [epDataArray, setEpDataArray] = useState<EpDataBase[]>([])

    useEffect(() => {
        fetchEpData().then(rawData => setEpDataArray(rawData))
    }, [])

    return (<div>
        {epDataArray.slice(0).reverse().map((x, i) => {
            let episodeId = `ep${x.id}`
            return (
                <div id={episodeId} className="episodeListing" key={i}>
                    <a href={`/ep/${x.id}`}><h1>{x.id}: {x.title}</h1></a>
                    <h2>{x.publishDate}</h2>
                    <p>{x.description}</p>
                    <ActionButton emoji="⚡️" text={`Stream episode ${x.id}`} link={x.listenLink} />
                </div>
            )
        })}
    </div>)
}