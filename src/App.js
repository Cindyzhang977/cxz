import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './views/custom-styles.scss'
import './views/app.css'
import resume from './resume.pdf'
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import Home from './home.js'
import Projects from './projects.js'
import About from './about.js'
import Experience from './experience.js'

function App() {

  return (
    <div id='home'>
      <NavBar />
      <div className='body'>
        <Home />
        <h id='projects'>projects</h>
        <Projects />
        <h id='experience'>experience</h>
        <Experience />
        <h id='about'>about</h>
        <About />
      </div>
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='navy' sticky='top' variant='dark' className='navbar'>
    <Navbar.Brand href='#home'><div className='navlink'>Cindy Zhang</div></Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'><div className='navlink'>Home</div></Nav.Link>
          <Nav.Link href='#projects'><div className='navlink'>Projects</div></Nav.Link>
          <Nav.Link href='#experience'><div className='navlink'>Experience</div></Nav.Link>
          <Nav.Link href='#about'><div className='navlink'>About</div></Nav.Link>
          <Nav.Link href='#resume'><div className='navlink'><a href={resume}>Resume</a></div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function Footer() {
  return (
    <Container fluid className='footer'>
      <Row className='contacts'>
        <a href="https://www.linkedin.com/in/cindy-x-zhang/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='contact' /></a>
        <a href="https://github.com/Cindyzhang977" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className='contact' /></a>
        <a href="https://www.instagram.com/cindyzhang977/" target="_blank" ><FontAwesomeIcon icon={faInstagramSquare} className='contact' /></a>
        <a href="mailto:cindyxzhang@berkeley.edu" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare} className='contact' /></a>
      </Row>
      <Row>
        <a id='copyright'>2020 | Cindy Zhang</a>
      </Row>
    </Container>
  )
}

export default App
