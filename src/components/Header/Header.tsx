import styled from 'styled-components'

import ToggleButton from '@/components/ToggleButton'

import { ReactComponent as HamburgerIcon } from '@/assets/svg/hamburger.svg'
import { ReactComponent as LogoIcon } from '@/assets/svg/logo.svg'

const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-items: center;
  padding: 0 1rem;
  box-shadow: 0 0 2rem rgba(0,0,255,.1);
`

const Left = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-items: center;
`

const Hamburger = styled(HamburgerIcon)`
  width: 28px;
  height: 28px;
  fill: #2b244d;
  cursor: pointer;
`

const Logo = styled(LogoIcon)`
  width: 150px;
`

const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: .1rem;
`

const ModeToggleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
`

const ModeToggleText = styled.span`
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
`


function Header() {
  return (
    <Container>
      <Left>
        <Hamburger />
        <Logo />
      </Left>
      <Heading>Today</Heading>
      <ModeToggleContainer>
        <ModeToggleText>Light</ModeToggleText>
        <ToggleButton />
        <ModeToggleText>Dark</ModeToggleText>
      </ModeToggleContainer>
    </Container>
  )
}

export default Header
