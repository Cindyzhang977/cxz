import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/cs61b.css'
import { Navbar, Container, Table } from 'react-bootstrap'

import disc01 from './cs170/disc01.pdf'
import disc02 from './cs170/disc02.pdf'
import disc03 from './cs170/disc03.pdf'
import disc04 from './cs170/disc04.pdf'
import disc06 from './cs170/disc06.pdf'
import disc07 from './cs170/disc07.pdf'
import disc08 from './cs170/disc08.pdf'
import disc09 from './cs170/disc09.pdf'
import disc11 from './cs170/disc11.pdf'
import disc12 from './cs170/disc12.pdf'
import disc13 from './cs170/disc13.pdf'


function CS170() {

  const history = useHistory()

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='navy' sticky='top' variant='dark' className='navbar'>
        <Navbar.Brand href='/cxz' onClick={() => history.push('/cxz')}><div className='navlink name'>Cindy Zhang</div></Navbar.Brand>
      </Navbar>
      <Container className="cs61b-container">
        <Container className="head-container">
          <div id="greeting">
            welcome to CS 170!
          </div>
          <div id="contact">
            <a href="mailto:cindyxzhang@berkeley.edu" target="_blank" rel="noopener noreferrer">cindyxzhang@berkeley.edu</a><br></br>
            <strong>Discussions:</strong> Wednesday 3 - 4pm | Cory 289<br></br>
            Thursday 12 - 1pm | <a href="https://berkeley.zoom.us/my/cindyxzhang">Zoom</a><br></br>
            <strong>OH:</strong> Wednesday 4 - 5pm | Cory 212<br></br>
          </div>
        </Container>
        <Container className="section">
          <div className="header">
            Discussions
          </div>
          <div>
            Discussion notes will be posted here every week.
          </div>
          <Table striped bordered className="table">
            <tbody>
              {
                discussions.map((discussion, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {discussion.worksheet ? <a href={discussion.worksheet} target="_blank" rel="noopener noreferrer">{discussion.name}</a> : discussion.name}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  )
}

const discussions = [
  {
    name: "Discussion 1: Asymptotics & Divide and Conquer",
    worksheet: disc01,
  },
  {
    name: "Discussion 2: FFT",
    worksheet: disc02,
  },
  {
    name: "Discussion 3: Graphs",
    worksheet: disc03,
  },
  {
    name: "Discussion 4: Greedy Algorithms",
    worksheet: disc04,
  },
  {
    name: "Discussion 6: Dynamic Programming",
    worksheet: disc06,
  },
  {
    name: "Discussion 7: Linear Programming",
    worksheet: disc07,
  },
  {
    name: "Discussion 8: Max Flow, Duality",
    worksheet: disc08,
  },
  {
    name: "Discussion 9: Zero Sum Games, Multiplicative Weights",
    worksheet: disc09,
  },
  {
    name: "Discussion 11: Complexity Classes, Reductions",
    worksheet: disc11,
  },
  {
    name: "Discussion 12: Randomized Algorithms",
    worksheet: disc12,
  },
  {
    name: "Discussion 13: Randomized Algorithms, Hashing",
    worksheet: disc13,
  }
]

export default CS170
