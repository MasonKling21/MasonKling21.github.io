import React from 'react'
import styled from 'styled-components'
import img1 from './imgs/1.jpeg'
import img2 from './imgs/2.jpeg'

const Projects = () => {
  document.title = "Projects";
  return (
    <ProjectsDiv>
        <Project>
          <div className='container'>
            <div className='projectImage'>
              <img src={ img2 } alt="Fantasy Football App"/>
            </div>
            <div className='projectTitle'>
              <h1> Fantasy Football Application</h1>
              <div className='projectDescription'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque magna quis massa sodales gravida. Suspendisse mattis a justo a molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam aliquam fermentum mi eu commodo. Suspendisse eu arcu vehicula lorem luctus mattis. Donec gravida tempus pulvinar. Aenean at ex non lacus vehicula pretium. Quisque nec elit sed odio pellentesque aliquet vitae commodo tortor. Suspendisse at urna mi. Aenean tempus eget tortor congue dapibus. Nullam vitae purus egestas, eleifend quam vitae, egestas mauris.</p>
                <p>Sed rhoncus augue sem, ac commodo odio viverra eget. Donec hendrerit ante venenatis consequat lobortis. Suspendisse potenti. Fusce urna augue, vehicula eget congue sed, scelerisque sit amet ex. Praesent tellus arcu, hendrerit et euismod sit amet, pharetra in nisl. Pellentesque auctor leo et ultrices rutrum. Maecenas ac libero id erat facilisis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tempus semper justo, sed ullamcorper massa congue ornare. Praesent rhoncus vel nunc ac mollis.</p> 
                <div className='projectSrc'>
                  <a href="https://github.com/anthonyfil/MLFinanceCapstone">Code</a>
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
              <h1> Capstone </h1>
              <div className='projectDescription'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque magna quis massa sodales gravida. Suspendisse mattis a justo a molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam aliquam fermentum mi eu commodo. Suspendisse eu arcu vehicula lorem luctus mattis. Donec gravida tempus pulvinar. Aenean at ex non lacus vehicula pretium. Quisque nec elit sed odio pellentesque aliquet vitae commodo tortor. Suspendisse at urna mi. Aenean tempus eget tortor congue dapibus. Nullam vitae purus egestas, eleifend quam vitae, egestas mauris.</p>
                <p>Sed rhoncus augue sem, ac commodo odio viverra eget. Donec hendrerit ante venenatis consequat lobortis. Suspendisse potenti. Fusce urna augue, vehicula eget congue sed, scelerisque sit amet ex. Praesent tellus arcu, hendrerit et euismod sit amet, pharetra in nisl. Pellentesque auctor leo et ultrices rutrum. Maecenas ac libero id erat facilisis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tempus semper justo, sed ullamcorper massa congue ornare. Praesent rhoncus vel nunc ac mollis.</p> 
                <div className='projectSrc'>
                  <a href="https://github.com/anthonyfil/MLFinanceCapstone">Code</a>
                </div> 
              </div>
            </div>
          </div>
        </Project>
    </ProjectsDiv>
  )
}

const ProjectsDiv = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`;

const Project = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    padding-left: 2vw;
    img {
      height: 80vh;
      width: 50vw;
    }
    .container {
      padding-top: 5vh;
      padding-right: 5vh;
      display: grid;
      grid-template-columns: 55% 45%;
      color: rgba(255, 255, 255, 0.75);
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
      width: 10%;
      border-radius: 10px;
    }
`;

export default Projects