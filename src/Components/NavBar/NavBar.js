import React from 'react'
import './NavBar.css'

import { v4 as uuidv4 } from 'uuid';

const getUniqueKey = () => {
    return uuidv4()
}

const emoji = require("emoji-dictionary")

const getPodcastAppIconUrl = (lowerDirectoryToggle, iconName) => `${lowerDirectoryToggle ? '.' : ''}./resources/images/${iconName}.svg`

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

const PodcastAppIcon = (href, platform, lowerDirectoryToggle, iconName) => {
    const title = `The Bonus Show on ${platform}`
    return (
        <li key={getUniqueKey()}>
            <a
                href={href}
                alt={title}
                title={title}
                rel="noopener noreferrer"
                >
                <img
                    src={getPodcastAppIconUrl(lowerDirectoryToggle, iconName)}
                    alt={`${platform} logo`}
                    ></img>
            </a>
        </li>
    )
}

const navigationLibrary = [
    {
        title: "Episodes",
        link: "../Ep",
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

const NavigationLinks = (title, link, alt) => {
    return (
        <li key={getUniqueKey()}>
            <a
                href={link}
                alt={alt}
                >
                {title}
            </a>
        </li>
    )
}

class NavBar extends React.Component {
    render() {
        return (
            <div id="navBarContainer">
                <a
                    href="/"
                    alt="Home"
                    rel="noopener noreferrer">
                        <h1 id="siteTitle"><span id="titleEmoji" role="img" aria-label={emoji.getName(this.innerHTML)}>⚡️</span>The Bonus Show</h1>
                </a>
                <div id="navBarRight">
                    <ul id="podcastAppBar">
                        {
                            iconLibrary.map(x => PodcastAppIcon(x.link, x.platform, true, x.iconFileName))
                        }
                    </ul>
                    <ul id="navigationBar">
                        {
                            navigationLibrary.map(x => NavigationLinks(x.title, x.link, x.alt))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar