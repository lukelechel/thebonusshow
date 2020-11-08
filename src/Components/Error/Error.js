import React from 'react'
import './Error.css'

import NavBar from '../NavBar/NavBar'

export const Error = () => (<div>
    <NavBar />
    <div id="error-page">
        <h1>😕</h1>
        <h1>Bogus! Something went wrong.</h1>
        <a href="/"><h1>Go Home</h1></a>
    </div>
</div>)