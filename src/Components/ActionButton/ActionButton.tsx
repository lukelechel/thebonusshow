import React from 'react'
import './ActionButton.css'

const ActionButton = (props: {emoji:string, text:string, link:string}) => (<div id="actionbutton-container">
    <a href={props.link} rel="noopener noreferrer">
        <span id="action-emoji">{props.emoji}</span>
        {props.text}
    </a>
</div>)

export default ActionButton