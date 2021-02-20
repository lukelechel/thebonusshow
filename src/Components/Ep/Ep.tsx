import React from 'react'
import './Ep.css'
import epDataFetcher from '../EpDataFetcher/EpDataFetcher'
import { Link } from 'react-router-dom'

export const ActionButton = (props: {emoji:string, text:string, link:string}) => (<div id="actionbutton-container">
    <a href={props.link} rel="noopener noreferrer">
        <span id="action-emoji">{props.emoji}</span>
        {props.text}
    </a>
</div>)

const Ep = () => (<div>
    <h1 id="allEpsPageLabel">All Episodes</h1>
    {
    epDataFetcher().slice(0).reverse().map((x, i) => {
        let episodeId = `ep${x.id}`
        return (
            <div id={episodeId} className="episodeListing" key={i}>
                <h1><Link to={`/ep/${x.id}`}>{x.id}: {x.title}</Link></h1>
                <h2>{x.publishDate}</h2>
                <p>{x.description}</p>
                <ActionButton emoji="⚡️" text={`Stream episode ${x.id}`} link={x.listenLink} />
            </div>
        )
    })}
</div>)

export default Ep