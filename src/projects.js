import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row, Container, Modal } from 'react-bootstrap'
import './styles/projects.css'

import * as ProjectDetails from './projectDetails.js'
import expenseImg from './imgs/projects/expense.png'
import blackjackImg from './imgs/projects/blackjack.png'
import musiqueImg from './imgs/projects/musique.png'
import mazeImg from './imgs/projects/maze.png'
import minDomNetworkImg from './imgs/projects/min-dom-network.png'
import gRoutesImg from './imgs/projects/gRoutes.png'

function Projects() {

  const [modalShow, setModalShow] = useState(false);
  const [currProj, setCurrProj] = useState(0);

  function ProjectCard(props) {
    return (
      <Card className='card-container'>
        <Card.Img fluid="true" variant='top' src={props.img} className='card-img'/>
        <Card.Body>
          <Card.Title className='card-title'>{props.name}</Card.Title>
          <Card.Subtitle className='card-subtitle'>{props.langs}</Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div className='btn button' onClick={() => setModalShow(true)}>
            Learn more
          </div>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
      <ProjectDetailsModal show={modalShow}
                      onHide={() => setModalShow(false)}
                      name={currProj.name}
                      description={currProj.details}
                      link={currProj.link}
        />
      <Container className='projects-container'>
        <Row>
          {
            projects.map((proj, idx) => (
              <Col xl={4} md={6}  onClick={() => setCurrProj(proj)} key={idx}>
                <ProjectCard name={proj.name}
                             langs={proj.langs}
                             description={proj.description}
                             img={proj.img}
                             key={idx}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

function ProjectDetailsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className='modal'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.description}
        {props.link &&
            <div className='button btn' onClick={() => window.open(props.link, '_blank')}>View Code</div>
        }
      </Modal.Body>
    </Modal>
  );
}

const projects = [
  {
    name: 'gRoutes',
    langs: 'React, Java Servlets, Datastore',
    description: 'Picture-based attractions explorer and day trip planner.',
    img: gRoutesImg,
    details: ProjectDetails.GRoutes(),
    link: 'https://github.com/googleinterns/step88-2020'
  },
  {
    name: 'Min Dominating Network',
    langs: 'Python',
    description: 'Approximation algorithm for an NP-Hard problem related to dominating sets.',
    img: minDomNetworkImg,
    details: ProjectDetails.MinDomNetwork(),
    link: 'https://github.com/liuk22/Proj170'
  },
  {
    name: 'Expense',
    langs: 'React',
    description: 'Budgeting web app for users to manage their finances.',
    img: expenseImg,
    details: ProjectDetails.Expense(),
    link: 'https://github.com/Cindyzhang977/expense'
  },
  {
    name: 'BlackJack Bot',
    langs: 'Python, React',
    description: 'Simulated different blackjack strategies and reported their performance.',
    img: blackjackImg,
    details: ProjectDetails.BlackjackBot(),
    link: 'https://github.com/richardju97/card-games'
  },
  {
    name: 'Musique',
    langs: 'MERN Stack',
    description: 'Group music queue integrated with user Spotify account.',
    img: musiqueImg,
    details: ProjectDetails.Musique(),
    link: 'https://github.com/Cindyzhang977/musique'
  },
  {
    name: '2D Maze Game',
    langs: 'Java',
    description: 'Random world generator that produced connected rooms and hallways.',
    img: mazeImg,
    details: ProjectDetails.Maze(),
    link: ''
  }
]

export default Projects
