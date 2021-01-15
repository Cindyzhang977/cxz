import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Container, Image } from 'react-bootstrap'
import './styles/projects.css'

import expenseDetailImg from './imgs/projects/expense-tracker.png'
import blackjackDetailImg from './imgs/projects/blackjack-bot.png'
import musiqueDetailImg from './imgs/projects/join-queue.png'

export function GRoutes() {
    return (
        <Container>
            <Row>
            <iframe 
                className="demo-video"
                src="https://www.youtube.com/embed/uTeNqPzuk-M?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                title="groutes demo"
                allowFullScreen
            >
            </iframe>
            </Row>
            <Row>
                <p>
                    <span className="g-gray">g</span><span className="g-blue">Routes </span> 
                    streamlines the trip planning process and increases potential for exploration of non mainstream attractions with:
                    <ul>
                        <li>Photo-centric attraction exploration</li>
                        <li>Drag and drop route customizability</li>
                        <li>Route optimization with an approximate Traveling Salesman algorithm</li>
                        <li>Trip saving and sharing with Google Cloud Datastore</li>
                    </ul>
                </p>
            </Row>
        </Container>
    )
}

export function StackoverflowScraper() {
  return (
      <Container>
          <Row>
          <iframe 
              className="demo-video"
              src="https://www.youtube.com/embed/4oSAqtPvEvo?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              title="stackoverflow scrapper demo"
              allowFullScreen
          >
          </iframe>
          </Row>
          <Row>
              <p>
                This StackOverflow Scraper makes development easier by allowing users to browse through posts and its top response without clicking through links. 
                If an answer looks promising, users can click to view the full post on StackOverflow.
              </p>
              <p>
                The python BeautifulSoup library was used to scrape web pages. 
              </p>
          </Row>
      </Container>
  )
}

export function MinDomNetwork() {
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

  export function Pintos() {
    return (
      <Container>
        <p>
          I worked in a team of four in CS 162 to build features of a basic instructional operating system. It supports the creation
          of multiple threads as well as running user programs. Select system calls (e.g. read, write, exec, mkdir, wait) were implemented.
          We also created a priority scheduler with priority donation. Finally, Pintos supports a basic file system with directory operations 
          and resizable files using inodes.
        </p>
      </Container>
    )
  }

  export function UPEVotingSystem() {
    return (
      <Container>
        <Row>
          <iframe 
            className="demo-video"
            src="https://www.youtube.com/embed/m2sOiX19JBk?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            title="UPE Voting System"
            allowfullscreen
          >
          </iframe>
        </Row>
        <Row>
          <p>
            I created the front end interface for the Berkeley UPE election web application. Once a voting session
            admin opens a session they've created, users can join that session via the generated code. Once users 
            join a session, they can drag and drop candidates to produce a ranked vote. 
          </p>
        </Row>
      </Container>
    )
  }
  
  export function Expense() {
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
  
  export function BlackjackBot() {
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
  
  export function Musique() {
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
  
  export function Maze() {
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