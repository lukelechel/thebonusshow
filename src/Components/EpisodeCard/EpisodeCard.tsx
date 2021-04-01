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
    <h2>{description}</h2>
    <ul>
        <li>{pubDate}</li>
        <li><Link to={`/${id}`}>📝 Show Notes</Link></li>
        <li><a href={listenUrl}>👂 Listen Now</a></li>
    </ul>
</div>)

export default EpisodeCard