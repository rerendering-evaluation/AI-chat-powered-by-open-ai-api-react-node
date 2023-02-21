import React from 'react'
import ME from '../../assets/me-about.jpg';
import {FaReact} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {SiCodeproject} from 'react-icons/si';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about_Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaReact  className='about__icon'/>
            <h5>Experience</h5>
            <small>+3 Years Working</small>
            </article> 
            <article className='about__card'>
            <FiUsers  className='about__icon'/>
            <h5>IT Certifications</h5>
            <small>+10 IT Certifications from world wide companies</small>
            </article> 
            <article className='about__card'>
            <SiCodeproject  className='about__icon'/>
            <h5>Projects</h5>
            <small>+50 Projects that you can visit in my github</small>
            </article> 
          </div>
          <p>
          orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About;