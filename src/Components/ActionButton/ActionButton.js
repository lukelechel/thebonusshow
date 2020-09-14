import React from 'react'
import './ActionButton.css'

class ActionButton extends React.Component {
    render() {
        return (
            <div className="actionButtonContainer">
                <a
                    href={this.props.linkDestination}
                    alt={this.props.linkAlt}
                    className="actionButton" >
                    {this.props.msg}
                </a>
            </div>
        )
    }
}

export default ActionButton