import React from 'react'
import './LeftPane.css'
import ActionButton from '../ActionButton/ActionButton'

import PodcastAppBar from '../PodcastAppBar/PodcastAppBar'

const LeftPane = () => (<div id="left-pane">
    <a href="/"><h1>The Bonus Show</h1></a>
    <h2>Fitness, Tech, and Productivity.</h2>
    <span id="horizontal-line" className="mobileOnly"><hr /></span>
    <p>New episodes, every sometimes.</p>
    <p>Hosted by Luke Lechel.</p>
    <PodcastAppBar />
    <ActionButton emoji="📬" text="Submit feedback for the show." link="./feedback" />
</div>)

export default LeftPane