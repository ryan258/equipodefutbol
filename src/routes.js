import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

const Routes = ({ user }) => {
  console.log(user) // we see user obj as part of the props
  return (
    <BrowserRouter>
      {/* now we can pass user from props to the header that the user is logged in */}
      <Header user={user} />
      <h1>moo 🐮</h1>
      <Switch>
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
