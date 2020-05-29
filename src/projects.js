import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row, Container, Image, Modal } from 'react-bootstrap'
import './views/projects.css'

import expenseImg from './imgs/projects/expense.png'
import blackjackImg from './imgs/projects/blackjack.png'
import musiqueImg from './imgs/projects/musique.png'
import mazeImg from './imgs/projects/maze.png'
import expenseDetailImg from './imgs/projects/expense-tracker.png'
import blackjackDetailImg from './imgs/projects/blackjack-bot.png'
import musiqueDetailImg from './imgs/projects/join-queue.png'
import minDomNetworkImg from './imgs/projects/min-dom-network.png'

function Projects() {

  const [modalShow, setModalShow] = useState(false);
  const [currProj, setCurrProj] = useState(0);

  function ProjectCard(props) {
    return (
      <Card className='card-container'>
        <Card.Img fluid variant='top' src={props.img} className='card-img'/>
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
      <ProjectDetails show={modalShow}
                      onHide={() => setModalShow(false)}
                      name={currProj.name}
                      description={currProj.details}
                      link={currProj.link}
        />
      <Container className='projects-container'>
        <Row>
          {
            projects.map((proj, idx) => (
              <Col xl={4} md={6}  onClick={() => setCurrProj(proj)}>
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

function ProjectDetails(props) {
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
        {props.link !== '' ?
            <div className='button btn' onClick={() => window.open(props.link, '_blank')}>View Code</div> :
            <></>}
      </Modal.Body>
    </Modal>
  );
}

const projects = [
  {
    name: 'Min Dominating Network',
    langs: 'Python',
    description: 'Approximation algorithm for an NP-Hard problem related to dominating sets.',
    img: minDomNetworkImg,
    details: <MinDomNetwork />,
    link: 'https://github.com/liuk22/Proj170'
  },
  {
    name: 'Expense',
    langs: 'React',
    description: 'Budgeting web app for users to manage their finances.',
    img: expenseImg,
    details: <Expense />,
    link: 'https://github.com/Cindyzhang977/expense'
  },
  {
    name: 'BlackJack Bot',
    langs: 'Python, React',
    description: 'Simulated different blackjack strategies and reported their performance.',
    img: blackjackImg,
    details: <BlackjackBot />,
    link: 'https://github.com/richardju97/card-games'
  },
  {
    name: 'Musique',
    langs: 'MERN Stack',
    description: 'Group music queue integrated with user Spotify account.',
    img: musiqueImg,
    details: <Musique />,
    link: 'https://github.com/Cindyzhang977/musique'
  },
  {
    name: '2D Maze Game',
    langs: 'Java',
    description: 'Random world generator that produced connected rooms and hallways.',
    img: mazeImg,
    details: <Maze />,
    link: ''
  }
]

function MinDomNetwork() {
  return (
    <Container>
      <p>
        Working in a team of 3, we designed an approximation algorithm for the problem of finding a subtree T in
        a given graph G so that all vertices in G are either in T or adjacent to a vertex in T. In other words,
        T must be a tree and a dominating set. The goal was to generate a T such that average pairwise distance between vertices
        in T are minimized.
      </p>
      <p>
        As a brief overview of our implementation, we first generated a minimum spanning tree and a steiner tree whose
        terminals are an approximate minimum dominating set. Then we picked the better solution to futher optimize.
        We used simulated annealing to prune leaves from our greedy solution to minimize average pairwise distance.
      </p>
    </Container>
  )
}

function Expense() {
  return (
    <Container>
      <Row>
        <Col md>
        <p>
          Expense is a budgeting web app that allows users to keep track of how they use their money.
        </p>
        <p>
          Some features include:
          <ul>
              <li>Setting monthly spending limits</li>
              <li>Managing progress towards a spending limit</li>
              <li>Logging transactions</li>
          </ul>
        </p>
        <p className='comment'>
          This was the project I built when I was first teaching myself react.
        </p>
        </Col>
        <Col md>
          <Image className='proj-img' src={expenseDetailImg} alt='project imgage' />
        </Col>
      </Row>
    </Container>
  )
}

function BlackjackBot() {
  return (
    <Container>
      <Row>
        <Col md>
          <p>
            This was a group project, where we coded different bots to simulate different Blackjack
            strategies. It combined basic AI and data visualization.
          </p>
          <p>
              One bot replicated a basic Blackjack strategy we found online, and others made decisions based on
              a calculated probability of losing the game. Game outcomes were analyzed by visualizing win rates
              with respect to the strategy and starting cards.
          </p>
        </Col>
        <Col md>
          <Image className='proj-img' src={blackjackDetailImg} />
        </Col>
      </Row>
    </Container>
  )
}

function Musique() {
  return (
    <Container>
      <Row>
        <Col md>
        <p>
          Musique is a web app that allows individuals to add songs
          to a shared queue. Queues are created with a unique code, and the
          same code is used to join the queue. These were stored in a MongoDB database.
        </p>
        <p>
          The Spotify Web API was used to retrieve user data to
          easily access saved songs in their Spotify account.
        </p>
        </Col>
        <Col md>
          <Image className='proj-img' src={musiqueDetailImg} />
        </Col>
      </Row>
    </Container>
  )
}

function Maze() {
  return (
    <Container>
      <p>
        This was the final project of CS61B, and it involved generating a random closed world with rooms and connecting hallways.
        The world included a torch feature, that displayed only a small radius of the world around the player and the objective
        of the game was to navigate through the maze to reach a target at the other side.
      </p>
      <p>
        Prims' algorithm was used to find the most efficient way to place hallways between rooms.
        A Weighted Quick Union object was used to check that all rooms are connected.
      </p>
    </Container>
  )
}

export default Projects
