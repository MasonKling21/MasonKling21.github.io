import { useState } from "react";
import styled from "styled-components";
import {DiReact, DiPython, DiJavascript1, DiNodejs, DiMongodb, DiHtml5, DiCss3, DiJava, DiMysql} from "react-icons/di";
import { SiCplusplus, SiC, SiWindows, SiSpring } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const techList = [
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
  { icon: <SiWindows />, name: "Windows" },
];

const Technologies = () => {
  document.title = "Technologies";

  const [hoverText, setHoverText] = useState("Hover over an icon");

  return (
    <>
      <CarouselContainer>
        <Carousel>
          <Track>
            {[...techList, ...techList].map((tech, index) => (
              <Slide key={index}
                onMouseEnter={() => setHoverText(tech.name)}
                onMouseLeave={() => setHoverText("Hover over an icon")}
              >
                {tech.icon}
              </Slide>
            ))}
          </Track>
        </Carousel>
        <TextContainer>
          <h1>{hoverText}</h1>
        </TextContainer>
      </CarouselContainer>
    </>
  );
};

const TextContainer = styled.div`
  width: 300px;
  height: 64px;
  text-align: center;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  background: linear-gradient(90deg, rgba(11,131,18,1) 0%, rgba(9,121,92,1) 35%, rgba(0,212,255,1) 100%);
`;

const CarouselContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Carousel = styled.div`
  width: 90%;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  width: calc(150px * ${techList.length * 2});
  animation: scroll 30s linear infinite;

  :hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-150px * ${techList.length})); }
  }
`;

const Slide = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Technologies;
