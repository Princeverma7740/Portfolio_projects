import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/profile/portfolio1.png'
import IMG2 from '../../assets/profile/portfolio2.png'
import IMG3 from '../../assets/profile/portfolio3.png'
import IMG4 from '../../assets/profile/portfolio4.png'
import IMG5 from '../../assets/profile/portfolio5.png'
import IMG6 from '../../assets/profile/portfolio6.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'This is website for creating and posting the blog and articles. ',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
  {
    id:2,
    image:IMG2,
    title:'Personalized gymnesium website',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
  {
    id:3,
    image:IMG3,
    title:'Social media project ',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title:'Chat application Project',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
  {
    id:5,
    image:IMG5,
    title:'Traveling Map to show Best places in a city',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
  {
    id:6,
    image:IMG6,
    title:'Portfolio website for Client',
    github:'https://github.com',
    demo:'https://dribble.com.Alien_pixels'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My recent work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio_container">
       {data.map(({id,image,title,github,demo})=>{
       return(
        <article key={id} className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
        {/* <a href={github}className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a> */}
        </div>
      </article>
       )}
       )}

        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG2} alt=""/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com.Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG3} alt=""/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com.Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG4} alt=""/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com.Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG5} alt=""/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com.Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={IMG6} alt=""/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com.Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article> */}


      </div>
    </section >
  )
}

export default Portfolio