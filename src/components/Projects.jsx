import React from 'react'
import styled from 'styled-components'
import img1 from './imgs/1.png'
import img2 from './imgs/2.png'
import img3 from './imgs/3.png'

const Projects = () => {
  document.title = "Projects";
  return (
    <ProjectsDiv>
          <Project>
          <div className='container'>
            <div className='projectImage'>
              <img src={ img3 } alt="Feed Me"/>
            </div>
            <div className='projectTitle'>
              <h1> Feed Me</h1>
              <div className='projectDescription'>
                <p>
                  A bot built using Python and Selenium. I would've made a Twitter developer account but it takes a long time to get approved.
                  There isn't much of a following yet and I'm not sure if there ever will be but the functionality is there if it happens.
                </p>
                <p>A list of tasks I worked on:</p> 
                <ul>
                  <li>Developed Twitter bot in Python that required a certain number of user interactions daily</li>
                  <li>Utilized selenium to log in and get number of followers, likes, comments, and retweets</li>
                  <li>Created functionality to require a daily interaction goal be met based on number of followers</li>
                  <li>Implemented logic to post a different ASCII pet image based on if it met daily interactions</li>
                  <li>Wrote functionality to delete account if daily interaction goals not met over specified timeframe</li>
                </ul>
                <div className='projectSrc'>
                  <a href="https://github.com/MasonKling21/FeedMe">Code</a>
                </div>
              </div>
            </div>
          </div>
        </Project>
        <Project>
          <div className='container'>
            <div className='projectImage'>
              <img src={ img1 } alt="Fantasy Football App"/>
            </div>
            <div className='projectTitle'>
              <h1> Fantasy Football Application</h1>
              <div className='projectDescription'>
                <p>
                  A fun web app that I built to improve my full-stack skills. I have been playing fantasy football and there were a few functionalities that
                  most of the fantasy football apps I use didn't have so I figured I would try my hand at them. 
                </p>
                <p>A list of tasks I worked on:</p> 
                <ul>
                  <li>Scraped player data from leading fantasy football websites using Python</li>
                  <li>Created REST API with CRUD functionality using Spring Boot, and MongoDB allowing users to
securely register and login.</li>
                  <li>Implemented functionality to sort players by specific stats, team, or name</li>
                  <li>Users can add players to a personal watchlist to monitor performance or compare players</li>
                  <li>Utilized Docker to create containers and Kubernetes to balance container loads</li>
                </ul>
                <div className='projectSrc'>
                  <a href="https://github.com/MasonKling21/FantasyFootball">Code</a>
                </div>
              </div>
            </div>
          </div>
        </Project>
        <Project>
        <div className='container'>
            <div className='projectImage'>
              <img src={ img2 } alt="Leveraging Machine Learning to Predict the Movement of Securities"/>
            </div>
            <div className='projectTitle'>
              <h1> Leveraging Machine Learning to Predict the Movement of Securities </h1>
              <div className='projectDescription'>
                <p>For my senior software engineering project at Oregon State University I worked closely with a team of 3 including myself. We were tasked with utilizing machine learning to predict the delta ROA of a company given certain data.</p>
                <p>A list of tasks I worked on:</p> 
                <ul>
                  <li>Leveraged machine learning algorithms to predict quarterly change in Return on Assets</li>
                  <li>Worked in an Agile team to build, test, and deploy an application to predict company profits</li>
                  <li>Used a Trello Kanban board to manage sprints and to keep track of ticket assignments</li>
                  <li>Utilized data mining to gather large amounts of XBRL tagged data from the SEC EDGAR API</li>
                  <li>Designed UI for data visualization that utilized subprocesses using the Kivy library in Python</li>
                </ul>
                <div className='projectSrc'>
                  <a href="https://github.com/anthonyfil/MLFinanceCapstone">Code</a>
                </div> 
              </div>
            </div>
          </div>
        </Project>
        <LayoutProtector>

        </LayoutProtector>
    </ProjectsDiv>
  )
}

const ProjectsDiv = styled.div`
      height: auto;
      overflow-y: scroll;
      @media screen and (min-width: 750px) {
        scroll-snap-type: y mandatory;
      }
`;

const Project = styled.div`
    height: auto;
    scroll-snap-align: start end;
    margin-top: 20px;
    padding-left: 2vw;
    img {
      box-shadow: 0 0 5px 5px grey;
      @media screen and (max-width: 750px) {
        height: 40vh;
        width: 80vw;
      }
      @media screen and (min-width: 750px) {
        height: 80vh;
        width: 60vw;
      }
    }
    .container {
      @media screen and (max-width: 750px) {
        padding-top: 5vh;
        padding-right: 5vh;
        display: block;
        color: rgba(255, 255, 255, 0.75);
      }
      @media screen and (min-width: 750px) {
        padding-top: 5vh;
        padding-right: 5vh;
        display: grid;
        grid-template-columns: 65% 35%;
        color: rgba(255, 255, 255, 0.75);
      }
    }
    a {
      text-decoration: none;
      color: white;
    }
    .projectSrc {
      margin: auto;
      font-weight: bold;
      text-align: center;
      background: linear-gradient(90deg, rgba(11,131,18,1) 0%, rgba(9,121,92,1) 35%, rgba(0,212,255,1) 100%);
      width: 70px;
      border-radius: 10px;
    }
`;

const LayoutProtector = styled.div`
height: 10vh;
`;

export default Projects