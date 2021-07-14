import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <h1>moo 🐮</h1>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
