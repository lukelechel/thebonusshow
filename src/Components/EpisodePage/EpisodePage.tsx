import { useEffect, useState } from 'react'
import './EpisodePage.css'
import { useParams } from 'react-router-dom'

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

function fetchEpData() {
    return fetch(epDataEndpoint)
        .then(response => response.json())
        .catch(error => console.log(error))
}

const EpisodePage = () => {
    const { id } = useParams<{ id: string }>()

    const [thisEpData, setThisEpData] = useState()

    useEffect(() => {
        fetchEpData().then(rawData => {
            setThisEpData(rawData.find((x:any) => x.id === id))
        })
    }, [])

    return (<div id="episode-page">
        <h1>{id}: {thisEpData.title}</h1>
    </div>)
}

export default EpisodePage