import React from 'react'
import styled from 'styled-components'

const Projects = () => {
    document.title = "Projects";
  return (
    <ProjectsDiv>
        <ProjectsContainer>
            <Project>
            <h4>Fantasy Football Website</h4>
            <p>Currently working on a Fantasy Football Website
                in which users can login, see players, sort players by different stats,
                and add players to a watchlist.
            </p>
            <a href="">WIP</a>
            </Project>
            <Project>
            <h4>ML Finance Capstone</h4>
            <p>For my capstone project at OSU me and 2 others
                collected large amounts of financial data, wrote a machine
                learning algorithm, and created a UI to predict the &Delta;ROA
                for companies.
            </p>
            <a href="https://github.com/anthonyfil/MLFinanceCapstone">Code</a>
            </Project>
        </ProjectsContainer>
    </ProjectsDiv>
  )
}

const ProjectsDiv = styled.div`

`;

const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 50%;
margin: auto;
@media screen and (max-width: 1100px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  
    margin: 0 auto;
  }
`;

const Project = styled.div`
display: grid;
grid-template-rows: 10% 80% 10%;
text-align: center;
background: linear-gradient(90deg, rgba(11,131,18,1) 0%, rgba(9,121,92,1) 35%, rgba(0,212,255,1) 100%);
margin: 10%;
margin-top: 30%;
height: 30vh;
border-radius: 30px;
padding: 3%;
a {
    text-decoration: none;
    color: white;
    background-color: #0F1624;
    width: 40%;
    border-radius: 40px;
    margin: auto;
}
p {
    padding: 10px;
}
`;

export default Projects