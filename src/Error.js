import React from 'react'
import './Home.css'

import NavBar from './NavBar'

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>:(</h1>
                <h1>Bogus! Something went wrong.</h1>
                <a href="/"><h1>Go Home</h1></a>
            </div>
        )
    }
}

export default Home