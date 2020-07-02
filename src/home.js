import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './views/home.css'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faArrowDown, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
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
                <a href="https://www.linkedin.com/in/cindy-x-zhang/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='social-link' /></a>
                <a href="https://github.com/Cindyzhang977" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className='social-link' /></a>
                <a href="https://www.instagram.com/cindyzhang977/" target="_blank" ><FontAwesomeIcon icon={faInstagramSquare} className='social-link' /></a>
                <a href="mailto:cindyxzhang@berkeley.edu" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} className='social-link' /></a>
              </Row>
            </Container>
          </Col>
          <Col>
          <p id='hello'>
            hello!
          </p>
          <p>
            I'm Cindy Zhang, a second year at UC Berkeley majoring in Computer Science.
            Out of all the classes I've taken at Berkeley, I've enjoyed CS170 (algorithms) and CS61B (data structures)
            the most. I'm also a researcher in the Systems Design and Integration Division
            of <a href='https://cubes.space/' target='_blank'>CUBES</a> at Berkeley,
            where I code object-oriented models to simulate a human Mars mission.
          </p>
          <p>
            Outside of academics, one of my main hobbies is wushu (Chinese martial arts). I love spontaneous adventures,
            and more specifically, I have an unhealthy obsession with going to the beach. Whenever I get the chance, I enjoy
            spending my time outdoors and exploring new places.
          </p>
          <p>
            Feel free to contact me at <a href="mailto:cindyxzhang@berkeley.edu" target="_blank">cindyxzhang@berkeley.edu</a>!
          </p>
          </Col>
        </Row>
      </Container>
      <a href='#projects'><FontAwesomeIcon icon={faAngleDoubleDown} className='arrow'/></a>
    </div>
  )
}

export default Home
