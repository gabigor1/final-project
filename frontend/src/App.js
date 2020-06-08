import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './common/Navbar'
import Home from './common/Home'
import FilmIndex from './components/films/FilmIndex'
import FilmShow from './components/films/FilmShow'
import Login from './components/auth/Login'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:id" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
