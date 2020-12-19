import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'
import About from '../About/About'
import Ep from '../Ep/Ep'
import EpisodePage from '../EpisodePage/EpisodePage'
import Feedback from '../Feedback/Feedback'
import Error from '../Error/Error'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/ep" component={Ep} exact />
        <Route path="/ep/:id" component={EpisodePage} />
        <Route path="/feedback" component={Feedback} exact/>
        <Route component={Error}/>
    </Switch>
</BrowserRouter>)

export default App
