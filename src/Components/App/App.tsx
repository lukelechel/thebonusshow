import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'
import EpisodePage from '../IndividualEpisode/IndividualEpisode'
import Feedback from '../Feedback/Feedback'
import Error from '../Error/Error'

import LeftPane from '../LeftPane/LeftPane'
import RightPane from '../RightPane/RightPane'

const App = () => (<div>
    <LeftPane />
    <RightPane>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/:id" component={EpisodePage} />
                <Route path="/feedback" component={Feedback} exact/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    </RightPane>
</div>)

export default App
