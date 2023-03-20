import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Prince</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://linkedin.com" target="_blank"><FaFacebook/></a>
        <a href="https://github.com" target="_blank"><FiInstagram/></a>
        <a href="https://dribble.com" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy: Prince Kheriwal.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer