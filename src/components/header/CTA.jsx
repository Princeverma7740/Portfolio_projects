import React from 'react'
import CV from '../../assets/profile/pk_cv.pdf'


const CTA = () => {
  return (
    <div classname="cta">
        <a href={CV} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA