import React, { useState } from 'react'
import { firebase } from '../firebase'

import { CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'
// yup docs: https://github.com/jquense/yup

const SignIn = (props) => {
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email 🤔').required('The email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      // take field values to server
      setLoading(true)
      // console.log('form submitted', values)
      submitForm(values)
    }
  })

  const submitForm = (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        // show success toast
        // redirect user
        props.history.push('/dashboard')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        // show a toast error
      })
  }

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: '100px' }}>
        {/* when you create a form it needs an onSubmit */}
        <form onSubmit={formik.handleSubmit}>
          <h2>Sign the 🤗 in!</h2>
          <input //
            name="email"
            placeholder="Insert email here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} // to make it a controlled component
          />
          {formik.touched.email && formik.errors.email ? <div className="error_label">{formik.errors.email}</div> : null}
          <input //
            name="password"
            type="password"
            placeholder="Insert password here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} // to make it a controlled component
          />
          {formik.touched.password && formik.errors.password ? <div className="error_label">{formik.errors.password}</div> : null}

          {loading ? <CircularProgress color="secondary" className="progress" /> : <button type="submit">Log in</button>}
        </form>
      </div>
    </div>
  )
}

export default SignIn
