import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import SecureRoute from './components/common/SecureRoute'
import Error from './components/common/Error'
import FilmIndex from './components/films/FilmIndex'
import FilmShow from './components/films/FilmShow'
import FilmNew from './components/films/FilmNew'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/films/new" component={FilmNew} />
        <Route path="/films/:id" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route path="/*" component={Error}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
