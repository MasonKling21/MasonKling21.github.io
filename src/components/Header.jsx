import React from 'react'
import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const Header = () => {
  return (
    <HeaderDiv>
        <DivCenter>
            <a href="/about">About</a>
            <a href="/technologies">Technologies</a>
            <a href="/projects">Projects</a>
        </DivCenter>
        <DivRight>
            <IconDiv>
            <a href="https://github.com/MasonKling21">
            <AiFillGithub size="3rem"/>
            </a>
            </IconDiv>
            <IconDiv>
            <a href="https://www.linkedin.com/in/mason-kling/">
            <AiFillLinkedin size="3rem"/>
            </a>
            </IconDiv>
        </DivRight>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
display: grid;
grid-template-columns: 90% 10%;
padding: 2vw;
font-size: 2rem;
a {
    transition: 0.3s ease;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.75);
    &:hover {
        color: white;
        cursor: pointer;
    }
}

`;

const DivCenter = styled.div`
text-align: center;
display: flexbox;
a {
  padding-right: 40px;
}
@media screen and (max-width: 640px) {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;

const DivRight = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 640px) {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;

const IconDiv = styled.div`
transition: 0.3s ease;
color: white;
border-radius: 20px;
&:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default Header