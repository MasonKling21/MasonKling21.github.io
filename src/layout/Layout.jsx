import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Layout = (props) => {
  return (
    <LayoutDiv>
        <Header />
        { props.val }
    </LayoutDiv>
  )
}

const LayoutDiv = styled.div`
display: grid;
grid-template-rows: 10vh 90vh;
height: 100vh;
@media screen and (max-width: 640px) {
  grid-template-rows: 20vh 80vh;
}
`;

export default Layout