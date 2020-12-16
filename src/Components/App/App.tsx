import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'
import Ep from '../Ep/Ep'
import EpisodePage from '../EpisodePage/EpisodePage'
import Error from '../Error/Error'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/ep" component={Ep} exact />
        <Route path="/ep/:id" component={EpisodePage} />
        <Route component={Error}/>
    </Switch>
</BrowserRouter>)

export default App
