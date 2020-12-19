import React from 'react'
import './About.css'

import Nav, { PodcastAppBar } from '../Nav/Nav'

const About = () => (<div id="about-page">
    <Nav />
    <div id="about-content">
        <h1>About the Show</h1>
        <p>The Bonus Show started in the summer of 2020. Episodes come out on a regular "surprise" schedule.</p>
        <div id="listenElement">
            <h2>Listen to the Podcast</h2>
            <PodcastAppBar />
        </div>
    </div>
</div>)

export default About