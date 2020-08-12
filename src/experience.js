import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap'
import './styles/experience.css'

import google from './imgs/experience/google.png'
import cubes from './imgs/experience/cubes.png'
import dolby from './imgs/experience/dolby.jpg'
import berkeley from './imgs/experience/berkeley.png'
import triton from './imgs/experience/triton.png'

function Experience() {
  return (
    <div className='experience-container'>
      <Accordion className='timeline'>
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} eventKey={idx}/>
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
          <Accordion.Toggle className='toggle' eventKey={eventKey}>
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
        subtitle: 'Researcher | March 2020 - Present',
        description: <div>
                      At <a href='https://cubes.space/' target='_blank' rel="noopener noreferrer">CUBES</a> (Center for the Utilization of Biological Engineering in Space),
                      I'm working on building object oriented models to simulate and optimize a
                      biologically-driven Mars exploration mission.
                     </div>,
        details: <div>
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
        subtitle: 'CS 61B Tutor | August 2019 - Present',
        description: <div>
                      For the Data Structures course at Berkeley, I teach weekly small sections,
                      guide students in office hours, and develop tutoring worksheets.
                      </div>,
        details: <div>
                 It's super rewarding to teach an introductory CS course at Berkeley, as I can make an
                 impact on students' decisions to pursue the field. This was the course that
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
