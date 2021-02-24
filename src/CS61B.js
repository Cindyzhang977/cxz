import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/cs61b.css'
import { Navbar, Container, Table } from 'react-bootstrap'

function CS61B() {

  const history = useHistory()

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='navy' sticky='top' variant='dark' className='navbar'>
        <Navbar.Brand href='/cxz' onClick={() => history.push('/cxz')}><div className='navlink name'>Cindy Zhang</div></Navbar.Brand>
      </Navbar>
      <Container className="cs61b-container">
        <Container className="head-container">
          <div id="greeting">
            welcome to CS 61B!
          </div>
          <div id="contact">
            <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer">cindyxzhang@berkeley.edu</a><br></br>
            <strong>Discussion:</strong> Wednesday 12 - 1pm <br></br>
            <strong>OH:</strong> Friday 10am - 1pm<br></br>
          </div>
        </Container>
        <Container>
          Below are my teaching materials for CS61B as well as some administrative links. Feel free to reach out to me if
          you have any questions.
          <p id="admin-links">
            <a href="https://sp21.datastructur.es/" target="_blank" rel="noopener noreferrer">Course Website</a><br></br>
            <a href="https://oh.datastructur.es/" target="_blank" rel="noopener noreferrer">OH Queue</a><br></br>
            <a href="https://edstem.org/us/courses/3735/discussion/" target="_blank" rel="noopener noreferrer">Ed</a><br></br>
            <a href="https://beacon.datastructur.es/" target="_blank" rel="noopener noreferrer">Beacon</a><br></br>
          </p>
        </Container>
        <Container className="section">
          <div className="header">
            Discussions
          </div>
          <div>
            Discussion slides and other materials will be posted here every week.
            Join the section Zoom here: <a href="https://berkeley.zoom.us/my/cindyxzhang" target="_blank" rel="noopener noreferrer">https://berkeley.zoom.us/my/cindyxzhang</a>
          </div>
          <Table striped bordered className="table">
            <thead>
              <tr>
                <th>Discussion</th>
                <th>Resources</th>
              </tr>
            </thead>
            <tbody>
              {
                discussions.map((discussion, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {discussion.worksheet ? <a href={discussion.worksheet} target="_blank" rel="noopener noreferrer">{discussion.name}</a> : discussion.name}
                      </td>
                      <td>
                        {
                          discussion.resources.map((resource, index) => {
                            return (
                              <div>
                                {resource.link ? <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a> : resource.name}
                              </div>
                            )
                          })
                        }
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
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
    </>
  )
}

const discussions = [
  {
    name: "Discussion 2: Intro to Java",
    worksheet: "https://sp21.datastructur.es/materials/discussion/disc02.pdf",
    resources: [
      {
        name: "slides",
        link: "https://docs.google.com/presentation/d/1EgLHsn60sd5OUSabdJXIgOJ7lwbJs0XA4Hn4Goqyryw/edit#slide=id.gb7578eb4cc_0_12"
      }
    ]
  },
  {
    name: "Discussion 3: Scope, Static, and LinkedLists",
    worksheet: "https://sp21.datastructur.es/materials/discussion/disc03.pdf",
    resources: [
      {
        name: "slides",
        link: "https://docs.google.com/presentation/d/1JTElUlKVrdp-TyHPy6_jZ4rMX9Pm0s1crHhI-NKochk/edit?usp=sharing"
      }
    ]
  },
  {
    name: "Discussion 4: Inheritance",
    worksheet: "https://sp21.datastructur.es/materials/discussion/disc04.pdf",
    resources: [
      {
        name: "slides",
        link: "https://docs.google.com/presentation/d/1Sb3BHm7fFYX1Uo1aXMhb4xqoXd6az7gAmJQK8M2bz1A/edit#slide=id.gb7578eb4cc_0_12"
      }
    ]
  },
  {
    name: "Discussion 5: Iterators & Iterables",
    worksheet: "https://sp21.datastructur.es/materials/discussion/disc05.pdf",
    resources: [
      {
        name: "slides",
        link: "https://docs.google.com/presentation/d/1wshbabF2hWI5xR0O2j8CU9TQYKsTEl3oBjWf00LG8LE/edit#slide=id.gb7578eb4cc_0_12"
      }
    ]
  },
  {
    name: "Discussion 6: Disjoint Sets & Asymptotics",
    worksheet: "https://sp21.datastructur.es/materials/discussion/disc06.pdf",
    resources: [
      {
        name: "slides",
        link: "https://docs.google.com/presentation/d/1Hhj4xet9AFLx_sUv6RnFxjlmoJ_GMCjoX_rSbdFp_QY/edit?usp=sharing"
      }
    ]
  }
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

export default CS61B
