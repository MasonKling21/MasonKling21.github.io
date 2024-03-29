import React from 'react'
import styled from 'styled-components'

const About = () => {
    document.title = "About";
  return (
    <AboutDiv>
        <HeaderDiv>
        Welcome To My Portfolio
        </HeaderDiv>
        <BodyDiv>
            My name is Mason Kling and I am a Software Engineer
            who recently graduated from Oregon State
            University with a Bachelor of Science in
            Computer Science. At OSU I took classes in
            Software Engineering, Web Development, Machine Learning,
            Data Structures, Algorithms, and much more.
            <br/>
            <br/>
            The projects page contains a few of the projects I've worked on.
            I'm always creating so if you 
            check back in the future there will be more.
            <br/>
            <br/>
            If you would like to contact me you can shoot me an email at:
            <br/>
            <a href="mailto:mason11kling@gmail.com">Mason11Kling@gmail.com</a>
        </BodyDiv>
    </AboutDiv>
  )
}

const AboutDiv = styled.div`
width: 100%;
overflow: auto;
display: block;
margin: 30px;
`;
const HeaderDiv = styled.div`
font-weight: 800;
font-size: 65px;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 16px;
@media screen and (max-width: 640px) {
    width: 100%;
    display: flexbox;
  
    margin: 0 auto;
  }
`;
const BodyDiv = styled.div`
max-width: 80%;
font-size: 24px;
line-height: 40px;
font-weight: 400;
padding-bottom: 3.6rem;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media screen and (max-width: 640px) {
    width: 100%;
    display: flexbox;
    padding: 0;
  
    margin: 0;
  }
`;

export default About