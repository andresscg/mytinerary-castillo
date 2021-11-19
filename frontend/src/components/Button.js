import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const SIZES = ['btn-medium', 'btn-large']

const Button = ({children, buttonSize, path}) => {
  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={`${path}`} className='btn-mobile'>
      <button className={`btn btn-primary ${checkSize}`}>
        {children}
      </button>
    </Link>
  )
}

export default Button
