import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectCurrentUser } from '@/store/user'
import { selectOpenSlideMenu } from '@/store/theme'

import Footer from '@/components/Footer'
import DefaultAvatar from '@/assets/images/default-avatar.png';

const Container = styled.aside<{ open: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props => (props.open ? '100%' : 0)};
  height: 100%;
  z-index: var(--z-index-menu);
  overflow: hidden;

  &:before {
    content: '';
    cursor: pointer;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #505050;
    opacity: 0.4;
  }
`

const Nav = styled.nav<{ open: boolean }>`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 90%;
  height: 100%;
  max-width: 320px;
  background: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  transform: translateX(${props => (props.open ? 0 : '-100%')});
  transition: transform 0.3s ease-in-out;
  will-change: transform;
`

const Header = styled.header`
  padding: 1rem 1.5rem;
  color: #fff;
  background: linear-gradient(
    to right,
    var(--color-secondary),
    var(--color-primary)
  );
`

const HeaderText = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`

const HeaderUser = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
`

const HeaderUserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const HeaderUserEmail = styled.span.attrs(() => ({
  className: 'text-ellipsis'
}))`
  font-weight: 600;
`

const Body = styled.section``

const RouteLinkContainer = styled.ul`
  display: grid;
  margin-top: 2rem;
`
const RouteLink = styled(Link)`
  margin: 1rem 1.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: #282828;

  &:after {
    content: '';
    display: block;
    width: 0;
    margin-top: 0.5rem;
    border-bottom: 2px solid var(--color-primary);
    transition: all 0.3s ease-in;
  }

  &:hover:after {
    width: 100%;
  }
`

function SlideMenu() {
  const currentUser = useSelector(selectCurrentUser)
  const openSlideMenu = useSelector(selectOpenSlideMenu)

  return (
    <Container open={openSlideMenu}>
      <Nav open={openSlideMenu}>
        <Header>
          <HeaderText>Welcome</HeaderText>
          {currentUser && (
            <HeaderUser>
              <HeaderUserAvatar src={currentUser.photoURL || DefaultAvatar} />
              <HeaderUserEmail>{currentUser.email}</HeaderUserEmail>
            </HeaderUser>
          )}
        </Header>
        <Body>
          <RouteLinkContainer>
            <RouteLink to="/">Home</RouteLink>
            <RouteLink to="/add-city">Add City</RouteLink>
            <RouteLink to="/logout">Logout</RouteLink>
          </RouteLinkContainer>
        </Body>
        <Footer />
      </Nav>
    </Container>
  )
}

export default SlideMenu
