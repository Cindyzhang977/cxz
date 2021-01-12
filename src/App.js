import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom-styles.scss'
import './styles/app.css'
import resume from './resume.pdf'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import Home from './Home.js'
import Projects from './Projects.js'
import About from './About.js'
import Experience from './Experience.js'

function App() {

  return (
    <div id='home'>
      <NavBar />
      <div className='body'>
        <Home />
        <h1 id='projects'>projects</h1>
        <Projects />
        <h1 id='experience'>experience</h1>
        <Experience />
        <h1 id='about'>about</h1>
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
          <Nav.Link href='#home' className='navlink'>Home</Nav.Link>
          <Nav.Link href='#projects' className='navlink'>Projects</Nav.Link>
          <Nav.Link href='#experience' className='navlink'>Experience</Nav.Link>
          <Nav.Link href='#about' className='navlink'>About</Nav.Link>
          <Nav.Link href={resume} className='navlink'>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function Footer() {
  return (
    <Container fluid className='footer'>
      <Row className='contacts'>
        <a href="https://www.linkedin.com/in/cindy-x-zhang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='contact' /></a>
        <a href="https://github.com/Cindyzhang977" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className='contact' /></a>
        <a href="https://www.instagram.com/cindyzhang977/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className='contact' /></a>
        <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} className='contact' /></a>
      </Row>
      <Row>
        <div id='footer-text'>Last updated: Jan 2021 | Cindy Zhang</div>
      </Row>
    </Container>
  )
}

export default App
