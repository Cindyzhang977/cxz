import React from 'react'
import { HashRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
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
import CS61B from './CS61B.js'

function App() {

  return (
    <div id='home'>
      <Router>
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/cs61b">
            <CS61B />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

function NavBar() {

  const history = useHistory()

  function goHome() {
    history.push('/')
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='navy' sticky='top' variant='dark' className='navbar'>
    <Navbar.Brand onClick={goHome}><div className='name navlink'>Cindy Zhang</div></Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link><Link to='/#home' className='navlink'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/#projects' className='navlink'>Projects</Link></Nav.Link>
          <Nav.Link><Link to='/#experience' className='navlink'>Experience</Link></Nav.Link>
          <Nav.Link><Link to='/#about' className='navlink'>About</Link></Nav.Link>
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
