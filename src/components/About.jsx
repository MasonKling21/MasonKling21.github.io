import React, { useEffect } from 'react';
import styled from 'styled-components';

const About = () => {
    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <AboutDiv>
            <HeaderDiv>
                Welcome To My Portfolio
            </HeaderDiv>
            <BodyDiv>
                My name is Mason Kling, and I am a Software Engineer with a Bachelor of Science
                in Computer Science from Oregon State University. During my time at OSU, I took courses
                in Software Engineering, Web Development, Machine Learning, Data Structures, Algorithms, and more.
                <br/><br/>
                After graduating, I joined Cognizant as a Software Engineer, where I primarily focused on back-end development
                using Java, C#, and Python for a large insurance company. My responsibilities included fixing bugs in production
                and lower environments, deploying changes, and developing enhancements to improve system performance and reliability.
                <br/><br/>
                I am currently seeking a position where I can develop and improve features in a dynamic,
                fast-moving company that offers opportunities for growth.
                <br/><br/>
                If you would like to contact me you can shoot me an email at:
                <br/>
                <a href="mailto:mason11kling@gmail.com">Mason11Kling@gmail.com</a>
            </BodyDiv>
        </AboutDiv>
    );
};

const AboutDiv = styled.div`
    width: 100%;
    overflow: auto;
    display: block;
    margin: 30px;
`;

const HeaderDiv = styled.div`
    font-weight: 800;
    font-size: 40px;
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
    font-size: 20px;
    line-height: 25px;
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

export default About;
