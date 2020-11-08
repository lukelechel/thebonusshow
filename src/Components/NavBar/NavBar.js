import React from 'react'
import './NavBar.css'

const emoji = require("emoji-dictionary")
const awsResourceUriPrefix = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/"

const navigationLibrary = [
    {
        title: "Episodes",
        link: "/Ep",
        alt: "Episodes"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/thebonusshow",
        alt: "The Bonus Show on Instagram"
    },
    {
        title: "YouTube",
        link: "https://www.youtube.com/channel/UCSVYJ-ZKxZx2Gv-I69wYcWg",
        alt: "The Bonus Show on YouTube"
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
        link: "https://feeds.fireside.fm/thebonusshow/rss",
        platform: "RSS",
        iconFileName: "rss"
    }
]

const NavBar = () => (<div id="navBarContainer">
    <a
        href="/"
        alt="Home"
        rel="noopener noreferrer">
            <h1 id="siteTitle"><span id="titleEmoji" role="img" aria-label={emoji.getName('⚡️')}>⚡️</span>The Bonus Show</h1>
    </a>

    <div id="navBarRight">
        <ul id="podcastAppBar">
            {
                iconLibrary.map(x => {
                    return (
                        <li key={x.platform}>
                            <a
                                href={x.link}
                                alt={`The Bonus Show on ${x.platform}`}
                                title={`The Bonus Show on ${x.platform}`}
                                rel="noopener noreferrer">
                                <img
                                    src={`${awsResourceUriPrefix}${x.iconFileName}.svg`}
                                    alt={`${x.platform} logo`} />
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        
        <ul id="navigationBar">
            {
                navigationLibrary.map(x => {
                    return (
                        <li key={x.title}>
                            <a href={x.link} alt={x.alt}>
                                {x.title}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
</div>)

export default NavBar