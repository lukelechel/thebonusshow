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

    const [thisEpData, setThisEpData] = useState({
        id: "",
        title: "",
        publishDate: "",
        description: "",
        listenLink: "",
        showNotes: [{
            isLink: false,
            title: "",
            link: "",
            straightUpText: ""
        }]
    });

    useEffect(() => {
        fetchEpData().then(rawData => {
            setThisEpData(rawData.find((x:EpDataBase) => x.id === id))
        })
    }, [id])

    return (<div id="episode-page">
        <div id="episode-title-info">
            <h1>Episode {id}</h1>
            <h2>{thisEpData.title}</h2>
            <h3 className="monospace">{thisEpData.description}</h3>
            <div className="monospace">
                <h4>{thisEpData.publishDate}</h4>
                <h4><a href={thisEpData.listenLink}>👂 Listen Now</a></h4>
            </div>
        </div>
        

        <ul id="show-notes" className="monospace">
            {thisEpData.showNotes.map((x, i) => (<li key={i}>
                {x.isLink ? (<a href={x.link} key={i}>
                    {x.title}
                </a>) :
                (x.straightUpText)}
            </li>))}
        </ul>
    </div>)
}

export default EpisodePage