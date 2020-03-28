import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './views/about.css'
import { Container, Col, Row, Carousel, Image } from 'react-bootstrap'

import wushu from './imgs/wushu-collage.png'
import travel from './imgs/travel-collage.png'

function About() {

  return(
    <Container className='about-container'>
      <Row className='first-row'>
        <Col md>
          <div className='about-desc-container'>
            <h3 className='about-title'>Wushu</h3>
            <p>
              Wushu (Chinese martial arts) can be thought of as a combination
              of traditional martial arts and acrobatics, and it involves
              everything from kicks to stances to flips. I started wushu when
              I was 8, and since then, wushu has been not only an outlet for stress,
              but it has also given me a community of supportive and hilarious friends.
              I did tear my ACL doing it though, unfortunately, but I'm trying to get back into it ASAP!
            </p>
          </div>
        </Col>
        <Col md>
          <Image src={wushu} className='about-img'/>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Image src={travel} className='about-img'/>
        </Col>
        <Col md>
          <div className='about-desc-container'>
            <h3 className='about-title'>Traveling</h3>
            <p>
              I love exploring new places. One of my favorite trips was
              backpacking through Plumas National Forest, where our surroundings
              actually matched the pictures on the packaging of our freeze dried dinner.
              Even though my current broke-college-student definition of traveling mainly
              involves visiting nearby parks, I'm always eager to spend the day outside.
              I'm particularly obsessed with beach trips and finding nice places to watch the sunset.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
