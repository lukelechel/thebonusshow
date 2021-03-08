import React from 'react'
import './Section.css'

interface SectionBase {
    sectionTitle: string,
    itemsArray: ItemsArrayBase[]
}
interface ItemsArrayBase {
    title: string,
    link?: string,
    rightArrow: boolean,
    subtitle?: string
}

const RightArrow = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" id="right-arrow">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
</svg>)

const Section = ({sectionTitle, itemsArray}:SectionBase) => (<div id="section">
    <h1>{sectionTitle}</h1>
    {itemsArray.map((x, i) => (<div key={i}>
        {x.link ?
            (<a href={x.link}><h2>{x.title}{x.rightArrow ? (<RightArrow />) : ''}</h2></a>)
            :
            (<h2>{x.title}{x.rightArrow ? (<RightArrow />) : ''}</h2>)}
        <h3>{x.subtitle}</h3>
    </div>))}
</div>)

export default Section