import React from 'react'
import './LeftPane.css'

import PodcastAppBar from '../PodcastAppBar/PodcastAppBar'

const LeftPane = () => (<div id="left-pane">
    <a href="/"><h1>The Bonus Show</h1></a>
    <h2>Fitness, Tech, and Productivity.</h2>
    <p>New episodes, every sometimes.</p>
    <p>Hosted by Luke Lechel.</p>
    <PodcastAppBar />
    <p><a href="/feedback">Feedback</a></p>
    <p><a href="/ksejogjqugq">Error</a></p>
</div>)

export default LeftPane