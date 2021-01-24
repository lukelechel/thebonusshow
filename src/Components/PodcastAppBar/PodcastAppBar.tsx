import React from 'react'

const awsResourceUriPrefix = 'https://thebonusshow-resources.s3.us-east-2.amazonaws.com/'

const iconLibrary = [
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

const PodcastAppBar = () => (<ul id="podcastAppBar">
    {
        iconLibrary.map(x => (
            <li key={x.platform}>
                <a
                    href={x.link}
                    title={`The Bonus Show on ${x.platform}`}
                    rel="noopener noreferrer">
                    <img
                        src={`${awsResourceUriPrefix}${x.iconFileName}.svg`}
                        alt={`${x.platform} logo`} />
                </a>
            </li>
        ))
    }
</ul>)

export default PodcastAppBar