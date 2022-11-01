import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Counter from './components/Counter'
import FormApplication from './components/FormApplication'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/counterapp" component={Counter} />
    <Route exact path="/formapp" component={FormApplication} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
