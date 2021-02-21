import React from 'react'
import './AllEpisodes.css'
import EpDataFetcher from '../EpDataFetcher/EpDataFetcher'
import ActionButton from '../ActionButton/ActionButton'
import { Link } from 'react-router-dom'

const AllEpisodes = () => (<div id="all-episodes">
    <h1>All Episodes</h1>
    <ul id="all-episodes-list">
        {EpDataFetcher().slice(0).reverse().map((x, i) => {return (<li key={i}>
            <h1><Link to={`/${x.id}`}>{x.id}: {x.title}</Link></h1>
            <h2>{x.publishDate}</h2>
            <p>{x.description}</p>
            <ActionButton emoji="⚡️" text={`Stream episode ${x.id}`} link={x.listenLink} />
        </li>)})}
    </ul>
</div>)

export default AllEpisodes