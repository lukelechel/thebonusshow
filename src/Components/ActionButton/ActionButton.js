import React from 'react'
import './ActionButton.css'

const ActionButton = ({link, alt, message}) => (<div className="actionButtonContainer">
    <a href={link} alt={alt} className="actionButton">
        {message}
    </a>
</div>)

export default ActionButton