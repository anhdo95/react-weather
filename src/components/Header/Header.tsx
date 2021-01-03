import { useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selectIsAuthenticated } from '@/store/user'
import { toggleSlideMenu, closeSlideMenu } from '@/store/theme'
import SlideMenu from '@/components/SlideMenu'
import ToggleButton from '@/components/ToggleButton'

import { ReactComponent as HamburgerIcon } from '@/assets/svg/hamburger.svg'
import { ReactComponent as LogoIcon } from '@/assets/svg/logo.svg'

const Container = styled.header<{ show: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-items: center;
  height: ${props => (props.show ? '3.5rem' : 0)};
  padding: 0 1rem;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  overflow: hidden;
`

const Left = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-items: center;
`

const Hamburger = styled(HamburgerIcon)`
  position: relative;
  width: 28px;
  height: 28px;
  z-index: var(--z-index-menu-button);
  fill: #2b244d;
  cursor: pointer;
`

const Logo = styled(LogoIcon)`
  width: 150px;
`

const Heading = styled.h3.attrs(() => ({
  className: 'heading-primary'
}))`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

const ModeToggleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
`

const ModeToggleText = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(closeSlideMenu())
  }, [location, dispatch])

  const handleHamburgerClick = useCallback(() => {
    dispatch(toggleSlideMenu())
  }, [dispatch])

  return (
    <Container show={isAuthenticated}>
      <SlideMenu />
      <Left>
        <Hamburger onClick={handleHamburgerClick} />
        <Link to="/">
          <Logo />
        </Link>
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
