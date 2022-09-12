import { useState } from 'react'
import styled from 'styled-components'
import { DiReact, DiPython, DiJavascript1, DiNodejs, DiMongodb, DiHtml5, DiCss3 } from "react-icons/di"
import { SiCplusplus, SiC, SiWindows } from 'react-icons/si'
import { FaGit } from "react-icons/fa";

var text = "Hover Icon";

const Technologies = () => {
    document.title = "Technologies";

    const [hover, setHover] = useState(false);

    const onHover = (e, val) => {
        setHover(true);
        text = val;
    }

    const offHover = (e) => {
        setHover(false);
        text = "";
    }

  return (
    <>

    <CarouselContainer>
        <Carousel>
            <Track>

            <div className='slide'>
                <DiReact size="7rem" className="icon" 
                onMouseEnter={(e) => onHover(e, "React")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiPython size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Python")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiJavascript1 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "JavaScript")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiNodejs size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Node.js")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiMongodb size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "MongoDB")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiHtml5 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "HTML5")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiCss3 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "CSS3")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiCplusplus size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "C++")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiC size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "C")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <FaGit size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Git")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiWindows size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Windows")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>

            <div className='slide'>
                <DiReact size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "React")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiPython size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Python")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiJavascript1 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "JavaScript")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiNodejs size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Node.js")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiMongodb size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "MongoDB")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiHtml5 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "HTML5")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <DiCss3 size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "CSS3")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiCplusplus size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "C++")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiC size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "C")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <FaGit size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Git")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            <div className='slide'>
                <SiWindows size="7rem" className="icon"
                onMouseEnter={(e) => onHover(e, "Windows")}
                onMouseLeave={(e) => offHover(e)}
                />
            </div>
            </Track>
        </Carousel>
        <TextContainer>
        <h1>{ text }</h1>
        </TextContainer>
    </CarouselContainer>
    </>
  )
}

const TextContainer = styled.div`
width: 300px;
height: 64px;
text-align: center;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
color: white;
background: linear-gradient(90deg, rgba(11,131,18,1) 0%, rgba(9,121,92,1) 35%, rgba(0,212,255,1) 100%);
`;

const CarouselContainer = styled.div`
color: white;
display: grid;
place-items: center;

.slide {
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}

.icon {
    transition: 0.3s ease;
    width: 100%;
}

.icon:hover {
    transform: translateZ(20px);
}
`;

const Carousel = styled.div`
margin: auto;
position: relative;
width: 90%;
display: grid;
place-items: center;
overflow: hidden;
`;

const Track = styled.div`
    gap: 4rem;
    display: flex;
    width: calc(250px * 18);
    animation: scroll 40s linear infinite;
    :hover {
        animation-play-state: paused;
    }
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * 9));
        }
    }
`;

export default Technologies