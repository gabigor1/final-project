import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
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
        <Route path="/films/new" component={FilmNew} />
        <Route path="/films/:id" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
