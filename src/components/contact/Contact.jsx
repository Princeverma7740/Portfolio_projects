import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
 import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n2wnvi8', 'template_wpgp5o9', form.current, 'o7mZH8Zvvz79hFXah')
    e.target.reset();
    
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>
      <div className='container contact_container'>
      <div className="contact_options">
        <article className="contact_option">
          <RiMessengerLine/>
          <h4>LinkedIN</h4>
          <h5>Prince Kheriwal</h5>
          <a href="https://linkedin.com/in/prince-kheriwal" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp/>
          <h4>WhatsAPp</h4>
          <h5>+918739909243</h5>
          <a href="https://wa.me/+918739909243" target="_blank">Send a message</a>
        </article>
      </div>
      {/* End of options */}
      <form ref={form} onSubmit={sendEmail}> 
        <label> Send an Email</label>
        <input type="text" name='name' placeholder='your full name' required/>
        <input type="email" name='email' placeholder='your Email' required/>
        <textarea name="message" rows="7" placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact