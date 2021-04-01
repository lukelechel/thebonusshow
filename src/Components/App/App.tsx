import './App.css'

import Home from '../Home/Home'

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
    </Switch>
</BrowserRouter>)
}

export default App
