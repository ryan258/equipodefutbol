import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AuthGuard from './Hoc/Auth'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'

import 'react-toastify/dist/ReactToastify.css'

const Routes = ({ user }) => {
  console.log(user) // we see user obj as part of the props
  return (
    <BrowserRouter>
      {/* now we can pass user from props to the header that the user is logged in */}
      <Header user={user} />
      <h1>moo 🐮</h1>
      <Switch>
        <Route exact path="/dashboard" component={AuthGuard(Dashboard)} />
        {/* remeber route gives us some props */}
        <Route
          exact
          path="/sign_in"
          component={
            //
            (props) => <SignIn {...props} user={user} />
          }
        />
        <Route exact path="/" component={Home} />
      </Switch>
      {/* vv will only show if you trigger a toast */}
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
