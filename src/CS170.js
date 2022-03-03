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
  }

]

export default CS170
