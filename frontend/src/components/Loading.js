import React from 'react'
import Loader from "react-loader-spinner";
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <Loader type="Rings" color="#FFF" height="200" width="200" />
    </div>
  )
}

export default Loading
