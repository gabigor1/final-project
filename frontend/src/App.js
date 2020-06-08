import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './common/Navbar'
import Home from './common/Home'
import FilmIndex from './components/films/FilmIndex'
import FilmShow from './components/films/FilmShow'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films/:id" component={FilmShow} />
        <Route path="/films" component={FilmIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
