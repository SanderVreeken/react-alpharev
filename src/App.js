import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Upload from './pages/Upload'
import { useStateValue } from './components/StateProvider'

function App() {
  const [{ user }] = useStateValue()

  return (
    <div className='application'>
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/upload'>
            {/* Path only allowed after a succesfull login and therewith user state. */}
            { user ? <Upload /> : <Redirect to={{
              pathname: '/login'
            }}/> }
          </Route>
          <Route exact path='/'>
            {/* Path only allowed after a succesfull login and therewith user state. */}
            { user ? <Home /> : <Redirect to={{
              pathname: '/login'
            }}/> }
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
