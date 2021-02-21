import React from 'react'
import './PodcastAppBar.css'

const awsResourceUriPrefix = "https://lukelechelcom-resources.s3.us-east-2.amazonaws.com/podcast-app-icons/"
const podcastAppIconLibrary = [
    {
        link: "https://podcasts.apple.com/us/podcast/the-bonus-show/id1519331671",
        platform: "Apple Podcasts",
        iconFileName: "apple-podcasts"
    },
    {
        link: "https://overcast.fm/itunes1519331671/the-bonus-show",
        platform: "Overcast",
        iconFileName: "overcast"
    },
    {
        link: "https://castro.fm/podcast/552ef827-62ea-4748-b572-5f90e348ae2c",
        platform: "Castro",
        iconFileName: "castro"
    },
    {
        link: "https://pca.st/4hy46n5y",
        platform: "Pocket Casts",
        iconFileName: "pocket-casts"
    },
    {
        link: "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/feed.xml",
        platform: "RSS",
        iconFileName: "rss"
    }
]

const PodcastAppBar = () => (
    <div id="podcast-app-bar">
        <h1>Subscribe wherever you want.</h1>
        <ul>
            {podcastAppIconLibrary.map(x => (
                <li key={x.platform}>
                    <a
                        href={x.link}
                        title={`The Bonus Show on ${x.platform}`}
                        rel="noopener noreferrer">
                        <img
                            src={`${awsResourceUriPrefix}${x.iconFileName}.svg`}
                            alt={`${x.platform} logo`}
                            width="3rem"
                            height="3rem" />
                        <p>{x.platform}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

export default PodcastAppBar