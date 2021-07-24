import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png'

export const CityLogo = ({ width, height, link, linkTo }) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width,
        height,
        background: `url(${mcitylogo}) no-repeat`
      }}
    ></div>
  )

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {template}
      </Link>
    )
  } else {
    return template
  }
}

export const showErrorToast = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_LEFT
  })
}

export const showSuccessToast = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_LEFT
  })
}
