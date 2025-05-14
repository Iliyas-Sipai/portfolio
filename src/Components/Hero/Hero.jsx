import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/profile-image.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" className='profile-img' />
      <h1><span>I'm Iliyas Sipai,</span> frontend developer based in India.</h1>
      <p>Hello, my name is Sipai Iliyas, and I’m a passionate frontend developer from India with a strong interest in building user-friendly, responsive, and impactful websites.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
