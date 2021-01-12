import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/home.css'
import { Col, Row, Image, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faEnvelopeSquare, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import profile from './imgs/profile.jpg'

function Home() {
  return (
    <div className='home-container'>
      <Container>
        <Row>
          <Col sm={8} lg={4} className='profile'>
            <Image src={profile} alt='profile picture' roundedCircle />
            <Container>
              <Row className='social'>
                <a href="https://www.linkedin.com/in/cindy-x-zhang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='social-link' /></a>
                <a href="https://github.com/Cindyzhang977" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className='social-link' /></a>
                <a href="https://www.instagram.com/cindyzhang977/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className='social-link' /></a>
                <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} className='social-link' /></a>
              </Row>
            </Container>
          </Col>
          <Col>
          <p id='hello'>
            hello!
          </p>
          <p>
            I'm Cindy Zhang, a third year at UC Berkeley majoring in Computer Science.
            Out of all the classes I've taken, I've enjoyed <a href="https://www2.eecs.berkeley.edu/Courses/CS170/">CS 170</a> (algorithms) 
            and <a href="https://www2.eecs.berkeley.edu/Courses/CS61B/">CS 61B</a> (data structures) the most. 
            I'm also currently a CS 61B TA and CS 170 reader. Click <a href="" >here</a> to view my teaching materials for 61B.
          </p>
          <p>
            Outside of academics, one of my main hobbies is wushu (Chinese martial arts). I love spontaneous adventures,
            and more specifically, I have an unhealthy obsession with going to the beach. Whenever I get the chance, I enjoy
            spending my time outdoors and exploring new places, capturing picturesque views on my phone.
          </p>
          <Button href="https://photo-portfolio-285516.wl.r.appspot.com/" className="portfolio-btn">
            <FontAwesomeIcon icon={faCamera} className="photo-icon" />
            Photos Portfolio
          </Button>
          <p>
            Feel free to contact me at <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer">cindyxzhang@berkeley.edu</a>!
          </p>
          </Col>
        </Row>
      </Container>
      <a href='#projects'><FontAwesomeIcon icon={faAngleDoubleDown} className='arrow'/></a>
    </div>
  )
}

export default Home
