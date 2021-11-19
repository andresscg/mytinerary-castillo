import React from "react";
import bg from "../assets/bg-video.mp4";
import Navbar from "./Navbar";
import icon from '../assets/logo_small_icon_only.png'
import "../index.css";

const Hero = () => {
  return (
    <div className="showcase">
      <Navbar />
      <video className="bg-video" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="text">
        <h2>
          My<span>Tinerary</span>
        </h2>
        <h3>Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <a href="#">Discover new experiences</a>
      </div>
    </div>
  );
};

export default Hero;
