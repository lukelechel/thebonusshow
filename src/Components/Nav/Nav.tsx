import React from 'react'
import './Nav.css'

const emoji = require("emoji-dictionary")
const awsResourceUriPrefix = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/"

const navigationLibrary = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Episodes",
        link: "/ep"
    },
    {
        title: "Feedback",
        link: "/feedback"
    }
]

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

const Nav = () => (<div id="navBarContainer">
    <a
        href="/"
        rel="noopener noreferrer">
            <h1 id="siteTitle"><span id="titleEmoji" role="img" aria-label={emoji.getName('⚡️')}>⚡️</span>The Bonus Show</h1>
    </a>

    <div id="navBarRight">
        <ul id="navigationBar">
            {
                navigationLibrary.map(x => (
                    <li key={x.title}>
                        <a href={x.link}>
                            {x.title}
                        </a>
                    </li>
                ))
            }
        </ul>
        <PodcastAppBar />
    </div>
</div>)

export default Nav