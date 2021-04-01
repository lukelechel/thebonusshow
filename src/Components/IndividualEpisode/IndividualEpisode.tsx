import React, { useEffect, useState } from 'react'
import './IndividualEpisode.css'
import Section from '../Section/Section'

interface EpDataBase {
    id: string,
    title: string,
    publishDate: string,
    description: string,
    listenLink: string,
    showNotes: [ShowNotesBase]
}
interface ShowNotesBase {
    isLink: boolean,
    title: string,
    link: string,
    straightUpText: string
}

const epDataEndpoint = 'https://thebonusshow-resources.s3.us-east-2.amazonaws.com/EpisodeData.json'
async function fetchRawEpData() {
    try {
        const response = await fetch(epDataEndpoint)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}
function useProcessedData(id:string) {
    fetchRawEpData().then(x => x.id === id)
    // const epData = rawData.find((x:EpDataBase) => x.id === id)

    const title = () => epData.title
    const pubDate = () => epData.publishDate
    const description = () => epData.description
    const streamUrl = () => epData.listenLink
    const showNotes = () => epData.showNotes

    return { title, pubDate, description, streamUrl, showNotes }
}

const IndividualEpisode = (props:any) => {

    const id = props.match.params.id

    useEffect(() => useProcessedData(id))

    const { title, pubDate, description, streamUrl, showNotes } = useProcessedData(id)

    return (<div id="individual-episode">
        <h1>The Bonus Show ⚡️</h1>
        <h2>Talking Fitness, Tech, and Productivity – every sometimes.</h2>

        <h2>Episode {id}</h2>
        <h2>{title}</h2>
        <h3>{pubDate}</h3>
        {/* <h4><a href={streamUrl}>Stream this episode</a></h4> */}
        <p>{description}</p>

        {/* <Section
            sectionTitle="Show Notes" itemsArray={showNotes} /> */}
    </div>)
}

export default IndividualEpisode