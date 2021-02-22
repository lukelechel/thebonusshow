import React from 'react'
import './LeftPane.css'
import { Link } from 'react-router-dom'

import PodcastAppBar from '../PodcastAppBar/PodcastAppBar'

const LeftPane = () => (<div id="left-pane">
    <a href="/"><h1>The Bonus Show</h1></a>
    <h2>Fitness, Tech, and Productivity.</h2>
    <span id="horizontal-line" className="mobileOnly"><hr /></span>
    <p>New episodes, every sometimes.</p>
    <p>Hosted by Luke Lechel.</p>
    <PodcastAppBar />
    <p><Link to="/feedback">📬 Submit feedback for the show.</Link></p>
</div>)

export default LeftPane