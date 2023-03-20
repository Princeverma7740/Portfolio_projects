import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {

    avatar:AVTR1,
    names: 'tina smdas',
    review:'sdfsd'
  },
  {

    avatar:AVTR2,
    names: 'tina smdas',
    review:'sdfsd'
  },
  {

    avatar:AVTR3,
    names: 'tina smdas',
    review:'sdfsd'
  },
  {

    avatar:AVTR4,
    names: 'tina smdas',
    review:'sdfsd'
  }

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[ Pagination, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}>
       {
        data.map(({avatar,names,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} /></div>
              <h5 className='client_name'>{names}</h5>
              <small className='client_review'>
               {review}
              </small>
          </SwiperSlide>
          )
        }
        )
       }
        {/* <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar one"/>
            <h5 className='client_name'>Ernest kogher</h5>
            <small className='client_review'>
              asdfashnsdhna adskjbhfasghd kjjhasdfk  kbdsaf jhsaf jgbbdsf 
               sdfjgsdf jkghdsff sdfbjksdbf sdfbjksdbf
            </small>
          </div>  
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar one"/>
            <h5 className='client_name'>Ernest kogher</h5>
            <small className='client_review'>
              asdfashnsdhna adskjbhfasghd kjjhasdfk  kbdsaf jhsaf jgbbdsf 
               sdfjgsdf jkghdsff sdfbjksdbf sdfbjksdbf
            </small>
          </div>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials