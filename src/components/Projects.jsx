import React from 'react'
import styled from 'styled-components'
import img1 from './imgs/1.png'
import img2 from './imgs/2.png'

const Projects = () => {
  document.title = "Projects";
  return (
    <ProjectsDiv>
        <Project>
          <div className='container'>
            <div className='projectImage'>
              <img src={ img1 } alt="Fantasy Football App"/>
            </div>
            <div className='projectTitle'>
              <h1> Fantasy Football Application</h1>
              <div className='projectDescr  iption'>
                <p>I am currently working on this</p>
                <p>Finished Features</p>
                <ul>
                  <li>Scraped player data from leading fantasy football websites using Python</li>
                  <li>Created REST API with CRUD functionality using Spring Boot, and MongoDB allowing users to
securely register and login.</li>
                </ul>
                <p>Features In Progress</p>
                <ul>
                <li>Implementing functionality to sort players by specific stats, team, or name</li>
                <li>Allow users to add players to a personal watchlist to monitor performance or compare players</li>
                <li>Find team logos with transparent backgrounds</li>
                <li>Work on making the header look prettier</li>
                </ul>
                <div className='projectSrc'>
                  <a href="/#/projects">WIP</a>
                </div>
              </div>
            </div>
          </div>
        </Project>
        <Project>
        <div className='container'>
            <div className='projectImage'>
              <img src={ img2 } alt="Fantasy Football App"/>
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