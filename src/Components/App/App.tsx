import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './tsSupport-react-router-dom.d.ts'
import './App.css'

import Home from '../Home/Home'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact/>
        {/* <Route path="/:id" component={EpisodePage} />
        <Route path="/feedback" component={Feedback} exact/>

        <Route path="/ep/:id" component={EpisodePage} /> This should be turned into a redirect. */}
    </Switch>
</BrowserRouter>)

export default App
