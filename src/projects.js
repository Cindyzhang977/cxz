import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row, Container, Image, Modal, Button } from 'react-bootstrap'
import './views/projects.css'

import expenseImg from './imgs/projects/expense.png'
import blackjackImg from './imgs/projects/blackjack.png'
import musiqueImg from './imgs/projects/musique.png'
import mazeImg from './imgs/projects/maze.png'
import expenseDetailImg from './imgs/projects/expense-tracker.png'
import blackjackDetailImg from './imgs/projects/blackjack-bot.png'
import musiqueDetailImg from './imgs/projects/join-queue.png'

function Projects() {

  const [modalShow, setModalShow] = useState(false);
  const [projNum, setProjNum] = useState(0);

  const projects = [['Expense', <Expense />, 'https://github.com/Cindyzhang977/expense'],
                    ['BlackJack Bot', <BlackjackBot />, 'https://github.com/richardju97/card-games'],
                    ['Musique', <Musique />, 'https://github.com/Cindyzhang977/musique'],
                    ['2D Maze Game', <Maze />, '']]

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
                      name={projects[projNum][0]}
                      description={projects[projNum][1]}
                      link={projects[projNum][2]}
        />
      <Container className='projects-container'>
        <Row>
          <Col xl={4} md={6}  onClick={() => setProjNum(0)}>
            <ProjectCard name='Expense' langs='React'
                         description='Budgeting web app for users to manage their finances.'
                         img={expenseImg}/>
          </Col>
          <Col xl={4} md={6} onClick={() => setProjNum(1)}>
            <ProjectCard name='BlackJack Bot' langs='Python, React'
                         description='Simulated different blackjack strategies and reported their performance.'
                         img={blackjackImg}/>
          </Col>
          <Col xl={4} md={6} onClick={() => setProjNum(2)}>
            <ProjectCard name='Musique' langs='MERN Stack'
                         description='Group music queue integrated with user Spotify account.'
                         img={musiqueImg}/>
          </Col>
          <Col xl={4} md={6} onClick={() => setProjNum(3)}>
            <ProjectCard name='2D Maze Game' langs='Java'
                         description='Random world generator that produced connected rooms and hallways.'
                         img={mazeImg}/>
          </Col>
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
          This was my first React project, and it made me realize the importance of thinking
          away from the keyboard and carefully mapping out relationships
          between components before diving into code.
        </p>
        </Col>
        <Col md>
          <Image className='proj-img' src={expenseDetailImg} />
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
          <p className='comment'>
            I learned that test driven development helps clarify the end goal for a group project
            so that everyone knows what the code should output.
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
        <p className='comment'>
          Not only was this my first time learning back end, but it was also
          my first hackathon project (CalHacks)!
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
      <p className='comment'>
        Plan, plan, plan! As a partner project, it was even more crucial that we shared a clear understanding of our implementation.
        We spent hours drawing out different algorithms and writing pseudocode,
        which made dividing the tasks easier and avoided conflicting code.
      </p>
    </Container>
  )
}

export default Projects
