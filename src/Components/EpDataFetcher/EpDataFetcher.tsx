import { useState, useEffect } from 'react'

const epDataEndpoint = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/EpisodeData.json"

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

async function fetchEpisodeData() {
    try {
        const response = await fetch(epDataEndpoint)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}

export default function EpDataFetcher() {
    const [epDataArray, setEpDataArray] = useState<EpDataBase[]>([])

    useEffect(() => {
        fetchEpisodeData().then(rawData => setEpDataArray(rawData))
    }, [])

    return epDataArray
}