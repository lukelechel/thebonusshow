import './EpisodeCard.css'
import { Link } from 'react-router-dom'

interface EpisodeCardBase {
    id: string,
    title: string,
    description: string,
    pubDate: string,
    listenUrl: string
}

const EpisodeCard = ({id, title, description, pubDate, listenUrl}:EpisodeCardBase) => (<div id="episode-card" className="monospace">
    <h1>{id}: {title}</h1>
    <h2><span id="pubDate">{pubDate}</span> {description}</h2>
    <ul>
        <li><Link to={`/${id}`}>Show Notes</Link></li>
        <li><a href={listenUrl}>Listen</a></li>
    </ul>
</div>)

export default EpisodeCard