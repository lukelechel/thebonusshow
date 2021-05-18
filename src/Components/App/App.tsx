import './App.css'

import Home from '../Home/Home'
import EpisodePage from '../EpisodePage/EpisodePage'
import Error from '../Error/Error'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface HelmetTitleBase {
    name: string,
    component?: any
}

const HelmetTitle = ({ name, component }:HelmetTitleBase) => {
    return (<HelmetProvider>
        <Helmet>
            <title>The Bonus Show - {name}</title>
        </Helmet>
        {component}
    </HelmetProvider>)
}

const App = () => {
  return (<BrowserRouter>
    <Switch>
        <Route exact path="/">
            <HelmetTitle name="Home" component={<Home />} />
        </Route>
        <Route path="/ep/:id" component={EpisodePage} />
        <Route>
            <HelmetTitle name="404: Page not found" component={<Error />} />
        </Route>
    </Switch>
</BrowserRouter>)
}

export default App
