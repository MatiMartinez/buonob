import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Contactanos</Title>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  padding: 4rem 8rem;
  background-color: #fafafa;
  color: #ababab;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Taviraj", serif;
`