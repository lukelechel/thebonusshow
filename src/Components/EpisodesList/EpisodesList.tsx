import { useEffect, useState } from 'react'
import './EpisodesList.css'
import EpisodeCard from '../EpisodeCard/EpisodeCard'

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

const EpisodesList = () => {
    const [epDataArray, setEpDataArray] = useState<EpDataBase[]>([])

    useEffect(() => {
        fetchEpData().then(rawData => setEpDataArray(rawData))
    }, [])

    return (<div id="episodes-list">
        {
            epDataArray.slice(0).reverse().map(x => <EpisodeCard id={x.id} title={x.title} description={x.description} pubDate={x.publishDate} listenUrl={x.listenLink} />)
        }
    </div>)
}

export default EpisodesList