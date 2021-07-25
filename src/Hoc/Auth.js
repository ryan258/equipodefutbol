import React from 'react'
import { Redirect } from 'react-router-dom'
import { firebase } from '../firebase'

// HOCs are components that return components - we're just returning a class that returns the component that we passed to it.

const AuthGuard = (Component) => {
  class AuthHoc extends React.Component {
    //! We'll do a check before we return the component
    authCheck = () => {
      const user = firebase.auth().currentUser
      if (user) {
        // maintain the props of the component by spreading them in
        return <Component {...this.props} />
      } else {
        return <Redirect to="/sign_in" />
      }
    }
    render() {
      // return <Component />
      return this.authCheck()
    }
  }
  return AuthHoc
}

export default AuthGuard
