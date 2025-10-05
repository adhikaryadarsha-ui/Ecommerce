import React from 'react'
import './Hero.css'
import Hand_icon from '../../components/Assets/hand_icon.png'
import Arrow_icon from '../../components/Assets/arrow.png'
import Hero_img from '../../components/Assets/hero_image.png'

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h1>NEW ARRIVALS ONLY</h1>
          <div className="">
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={Hand_icon} alt="hand icon" />
            </div>

            <p>collection</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div className="">Latest Collection</div>
            <img src={Arrow_icon} alt="icon arrow" />
          </div>
        </div>
        <div className="hero-right">
          <img src={Hero_img} alt="hero photo" />
        </div>
      </div>
    </div>
  );
}

export default Hero
