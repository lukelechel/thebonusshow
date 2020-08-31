import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Ep from './Ep'
import Error from './Error'

import EpisodePage from './EpisodePage'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/ep" component={Ep} exact />
              <Route path="/ep/:id" component={EpisodePage} />
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
