import { useState } from 'react';
import styled from 'styled-components';
import { DiReact, DiPython, DiJavascript1, DiNodejs, DiMongodb, DiHtml5, DiCss3, DiJava, DiMysql } from "react-icons/di";
import { SiCplusplus, SiC, SiWindows, SiSpring } from 'react-icons/si';
import { FaGit } from "react-icons/fa";

const techIcons = [
    { icon: <DiReact />, name: "React" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpring />, name: "Spring" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiC />, name: "C" },
    { icon: <FaGit />, name: "Git" },
    { icon: <SiWindows />, name: "Windows" }
];

const repeatedIcons = [...techIcons, ...techIcons];

const Technologies = () => {
    const [hoveredText, setHoveredText] = useState("Hover over an icon");

    return (
        <Container>
            <Title>{hoveredText}</Title>
            <Carousel>
                <Track>
                    {repeatedIcons.map((tech, index) => (
                        <Slide key={index}>
                            <IconWrapper 
                                onMouseEnter={() => setHoveredText(tech.name)}
                                onMouseLeave={() => setHoveredText("Hover over an icon")}
                            >
                                {tech.icon}
                            </IconWrapper>
                        </Slide>
                    ))}
                </Track>
            </Carousel>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0F1624;
    color: white;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #00c8ff;
`;

const Carousel = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
`;

const Track = styled.div`
    display: flex;
    width: calc(200px * 28);
    animation: scroll 25s linear infinite;

    &:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-200px * 14)); }
    }
`;

const Slide = styled.div`
    height: 180px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.div`
    font-size: 7rem;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.2);
        color: #00c8ff;
    }
`;

export default Technologies;
