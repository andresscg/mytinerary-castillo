import React from 'react'
import '../App.css'
import './Hero.css'
import Button from './Button'


const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/assets/bg-video.mp4" autoPlay loop muted></video>
      <h1>MyTinerary</h1>
      <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
      <Button className="button" buttonSize='btn-large' path='/cities'>Find your next experience</Button>
    </div>
  )
}

export default Hero
