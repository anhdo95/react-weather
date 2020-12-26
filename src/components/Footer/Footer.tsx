import styled from 'styled-components'

const Container = styled.footer`
  padding: 1rem;
  text-align: center;
`

function Footer() {
  return <Container>&copy; Copyright 2020</Container>
}

export default Footer
