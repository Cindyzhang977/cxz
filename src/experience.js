import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap'
import './styles/experience.css'

import google from './imgs/experience/google.png'
import cubes from './imgs/experience/cubes.png'
import dolby from './imgs/experience/dolby.jpg'
import berkeley from './imgs/experience/berkeley.png'
import triton from './imgs/experience/triton.png'
import citadel from './imgs/experience/citadel.jpg'

function Experience() {
  return (
    <div className='experience-container'>
      <Accordion className='timeline'>
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} eventKey={'event-' + idx}/>
        ))}
      </Accordion>
    </div>
  )
}

const TimelineItem = ({ data, eventKey }) => (
    <div className='timeline-item'>
      <div className='title-container'>
        <span className='circle' />
        <h4>{data.title}</h4>
        <img src={data.img} className='logo' alt='logo' />
      </div>
      <h5>{data.subtitle}</h5>
      <div className='timeline-item-content'>
        <div>{data.description}</div>
          <Accordion.Toggle className='toggle' eventKey={eventKey} onClick={() => {console.log(eventKey)}}>
            Read More
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={eventKey}>
            <div>{data.details}</div>
          </Accordion.Collapse>
      </div>
    </div>
);

const timelineData = [
    {
      title: 'Citadel',
      subtitle: 'SWE Intern | May - August 2021',
      description: <div>
                   As a SWE intern on the Data Strategies team in Citadel's Global Fixed Income. I redesigned a 
                   distributed compute system that allows users to submit an arbitrary chain of functions and a list of inputs 
                   to execute in parallel on kubernetes. 
                   </div>,
      details: <div>
                This was my most fulfilling internship, as I was handed a real project with significant impact and I also had the ownership 
                to design a reliable and scalable system based on the business needs that were communicated to me. I worked with various technologies, 
                including Docker, Kubernetes, MongoDB, as well as many internal tools. Every day I was doing something I've never done before. Citadel's
                work culture is definitely more intense than a traditional tech company, but it's true when they say that I'll never get bored. 
                There's always interesting problems to solve and brilliant people to learn from. 
               </div>,
      img: citadel
    },
    {
        title: 'Google',
        subtitle: 'STEP Intern | May - August 2020',
        description: <div>
                      As a STEP intern in Google Travel, I worked with two other interns to build a webapp with React frontend 
                      and Java Servlet backend that increases exploration of non mainstream attractions and streamlines the trip 
                      planning process. View demo video <a href="https://youtu.be/uTeNqPzuk-M" target="_blank" rel="noopener noreferrer">here</a>!  
                     </div>,
        details: <div>
                  <div>
                    Various Google APIs were integrated to query nearby attractions, display their images, render maps with pins and directions,
                    and autocomplete searches. The route between selected attractions could be customized with drag and drop rearrangement or optimized with a 2-approximate 
                    Traveling Salesman algorithm. Finally, once the trip is created, it can be saved and shared. 
                  </div>
                  <div style={{marginTop: 10}}>
                    Needless to say, this was an amazing internship. I experienced the entire development process from ideation to deployment. 
                    I learned how to write a good design document, the code review process, git workflows, and proper unit testing. Even though 
                    this was a virtual internship, I felt very connected with my team and Google in general. There were so many intern events,
                    and I took advantage of the ease of virtual coffee chats to connect with Googlers to learn about their experiences. 
                  </div>
                 </div>,
        img: google
    },
    {
        title: 'CUBES',
        subtitle: 'Undergraduate Researcher | March - December 2020',
        description: <div>
                      At <a href='https://cubes.space/' target='_blank' rel="noopener noreferrer">CUBES</a> (Center for the Utilization of Biological Engineering in Space),
                      I worked on the Systems Design and Integration Division to build object oriented models to simulate and optimize a
                      biologically-driven Mars exploration mission.
                     </div>,
        details: <div>
                  I designed and implemented a dynamic inventory to keep track of all objects in the system and their states.
                  <a href='http://pycatshoo.org/' target='_blank' rel="noopener noreferrer">PyCATSHOO</a> is used to model
                  hybrid systems and simulate processes that would take place on a long-term human mission to Mars.
                 </div>,
        img: cubes
    },
    {
        title: 'Triton',
        subtitle: 'Part Time Intern | November 2019 - February 2020',
        description: <div>
                     I redesigned a revamped <a href='https://triton.ml/' target='_blank' rel="noopener noreferrer">Triton's webite</a> using
                     React with Redux. On the website, customers can sign up for their service or request a demo,
                     and this automatically sends a slackbot notification to Triton.
                     </div>,
        details: <div>
                  This was my first experience working at a startup, and the fast pace of the company
                  was a nice break to the routine of classes. At the time of my internship, Triton had two full time
                  employees and one other intern. As a result, I felt the importance of my work and clearly saw its impact.
                 </div>,
        img: triton
    },
    {
        title: 'Berkeley EECS Department',
        subtitle: 'CS 61B TA (sp21), CS 170 Reader (sp21, fa20), CS 61B Tutor (sp20, fa19) | August 2019 - Present',
        description: <div>
                      As a part of course staff at Berkeley, I've mostly taught weekly sections to guide students towards a 
                      better understanding of the material. I also hold office hours, grade assignments, and develop course material. 
                      </div>,
        details: <div>
                 It's super rewarding to teach an introductory CS course at Berkeley, as I can make an
                 impact on students' decisions to pursue the field. CS 61B and CS 170 were the courses that
                 really convinced me that I chose the right major.
                 (Plus, is it just me, or is it really satisfying to write on white boards?)
                 </div>,
        img: berkeley
    },
    {
        title: 'Dolby',
        subtitle: 'QA Intern | May - August 2019',
        description: <div>
                      I was on the Dolby Vision team, where I wrote Python scripts to verify
                      their video compression algorithm. I adapted scripts to be more scalable
                      and versatile, and Pytest was used to automate the tests.
                      </div>,
        details: <div>
                    <div>
                    The scripts parsed out config files provided by the research team that specified
                    information such as the video frames and compression type. In the end, tiff files
                    were generated to compare the compressed versions against the original at high resolution TVs.
                    </div>
                    <div style={{marginTop: 10}}>
                    This was my first internship, and it was great to experience workplace culture and I had an
                    amazing mentor to guide me through (we went on boba runs too).
                    One regret though, was not talking more to the people working around me.
                    I missed out on the opportunity to learn more about their work and to feel more included in the workplace.
                    </div>
                  </div>,
        img: dolby
    },
];

export default Experience
