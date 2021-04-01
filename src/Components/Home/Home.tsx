import React, { useEffect, useState } from 'react'
import './Home.css'
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

const epDataEndpoint = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/EpisodeData.json"

async function fetchEpisodeData() {
    try {
        const response = await fetch(epDataEndpoint)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}

const SubscriptionLibrary = [
    {
        title: "Apple Podcasts",
        link: "https://podcasts.apple.com/us/podcast/the-bonus-show/id1519331671",
        rightArrow: true,
    },
    {
        title: "Overcast",
        link: "https://overcast.fm/itunes1519331671/the-bonus-show",
        rightArrow: true,
    },
    {
        title: "Castro",
        link: "https://castro.fm/podcast/552ef827-62ea-4748-b572-5f90e348ae2c",
        rightArrow: true,
    },
    {
        title: "Pocket Casts",
        link: "https://pca.st/4hy46n5y",
        rightArrow: true,
    },
    {
        title: "RSS",
        link: "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/feed.xml",
        rightArrow: true,
    }
]

const Home = () => {
    const [epList, setEpList] = useState([{title: "", rightArrow: false}])

    useEffect(() => {
        fetchEpisodeData().then(rawData => {
            rawData.slice(0).reverse().map((x:EpDataBase) => {
                return setEpList((epList) => [...epList, {
                    title: `${x.id}: ${x.title}`,
                    link: `/${x.id}`,
                    rightArrow: true,
                    subtitle: x.description
                }])
            })
        })
    }, [])

    return (<div id="home">
        <h1>The Bonus Show ⚡️</h1>
        <h2>Talking Fitness, Tech, and Productivity – every sometimes.</h2>

        <Section
            sectionTitle="Subscribe" itemsArray={SubscriptionLibrary} />
        <Section
            sectionTitle="Episodes" itemsArray={epList} />
    </div>)
}

export default Home