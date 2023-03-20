import React from 'react'
import'./experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3> FrontEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>SCSS</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>Tailwind CSS</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>JS/TS</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>React</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>Angular</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>MUI/Chakra UI/Syncfusion</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            
          </div>
        </div>

        {/* end of fornt end */}
        <div className="experience_backend">
        <h3> Backend Development/Programming</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>JAVA</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>SpringBoot</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>Node.Js</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>SQL</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>MongoDb</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>C/C++</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>Python and Machine learning</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            <article className="experience_details">
              <BsPatchCheckFill/>
              <h4>Data Analytics</h4>
              {/* <small className='text-light'> Experienced</small> */}
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience