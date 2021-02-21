import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => (<div id="error-page">
    <h1>😕</h1>
    <h1>Bogus! Something went wrong.</h1>
    <Link to="/"><h1>Go Home</h1></Link>
</div>)

export default Error