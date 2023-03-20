import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/profile/me-about.png' 

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2> About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div> 
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2+ years Working</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>15+ Worldwide</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>10+ projects</small>
            </article>
            </div>
            <p>An enthusiastic and tech nerd fullstack web developer providing services since last two years for the startups.Willing to get into full time opportunities </p>
             <a href="#contact" className='btn btn-primary'>Lets Talk </a>  
        </div>
      </div>
    </section >
  )
}

export default About