import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'
import IndividualEpisode from '../IndividualEpisode/IndividualEpisode'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/:id" component={IndividualEpisode} />

        <Route path="/ep/:id" component={IndividualEpisode} /> {/*This should be turned into a redirect.*/}
    </Switch>
</BrowserRouter>)

export default App
