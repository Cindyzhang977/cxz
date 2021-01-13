import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/cs61b.css'
import { Navbar, Container } from 'react-bootstrap'

function CS61B() {

  const history = useHistory()

  const discussions = [
    // {
    //   name: ,
    //   link: 
    // }
  ]

  const labs = [
    // {
    //   name: ,
    //   link:
    // }
  ]

  const guides = [
    {
      name: "Object Oriented Programming",
      link: "https://github.com/Cindyzhang977/cs61b-teaching/blob/main/object-oriented-programming.md"
    },
    {
      name: "Asymptotics",
      link: "https://github.com/Cindyzhang977/cs61b-teaching/blob/main/asymptotics.md"
    },
    {
      name: "Hashing",
      link: "https://github.com/Cindyzhang977/cs61b-teaching/blob/main/hashing.md"
    },
    {
      name: "Graphs",
      link: "https://github.com/Cindyzhang977/cs61b-teaching/blob/main/graphs.md"
    },
    {
      name: "Sorting",
      link: "https://github.com/Cindyzhang977/cs61b-teaching/blob/main/sorting.md"
    }
  ]

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='navy' sticky='top' variant='dark' className='navbar'>
        <Navbar.Brand href='/cxz' onClick={() => history.push('/cxz')}><div className='navlink name'>Cindy Zhang</div></Navbar.Brand>
      </Navbar>
      <Container className="cs61b-container">
        <div id="greeting">
          welcome to CS 61B!
        </div>
        <div>
          Below are my teaching materials for CS61B. Feel free to reach out to me 
          at <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer">cindyxzhang@berkeley.edu</a> if
          you have any questions. 
        </div>
        <Container className="section">
          <div className="header">
            Discussions
          </div>
          <div>
            Discussion slides and other materials will be posted here every week.
          </div>
          <ul className="links">
            {
              discussions.map((disc, index) => {
                return (
                  <li key={index}>
                    <a href={disc.link}>{disc.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </Container>
        <Container className="section">
          <div className="header">
            Labs
          </div>
          <div>
            Lab slides and other materials will be posted here every week.
          </div>
          <ul className="links">
            {
              labs.map((lab, index) => {
                return (
                  <li key={index}>
                    <a href={lab.link}>{lab.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </Container>
        <Container className="section">
          <div className="header">
            Resources
          </div>
          <div>
            These guides are for some of the most important concepts taught in CS61B and is definitely not comprehensive 
            of the entire course. They are not meant to substitute lecture, but rather to supplement it. As a result, some 
            familiarity with the material is assumed. For best results, read after watching lecture.
          </div>
          <ul className="links">
            {
              guides.map((guide, index) => {
                return (
                  <li key={index}>
                    <a href={guide.link}>{guide.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </Container>
      </Container>
    </div>
  )
}

export default CS61B