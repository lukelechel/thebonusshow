import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'
import EpisodePage from '../IndividualEpisode/IndividualEpisode'
import Feedback from '../Feedback/Feedback'

import LeftPane from '../LeftPane/LeftPane'
import RightPane from '../RightPane/RightPane'

const App = () => (<BrowserRouter>
    <LeftPane />
    <Switch>
        <RightPane>
            <Route path="/" component={Home} exact/>
            <Route path="/:id" component={EpisodePage} />
            <Route path="/feedback" component={Feedback} exact/>
        </RightPane>
    </Switch>
</BrowserRouter>)

export default App
