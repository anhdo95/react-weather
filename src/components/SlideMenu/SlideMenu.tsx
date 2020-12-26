import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '@/components/Footer'

const Container = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-index-menu);

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
    opacity: 0;
    transition: opacity 0.3s linear;
    will-change: opacity;
  }
`

const Nav = styled.nav`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 90%;
  height: 100%;
  max-width: 320px;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
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
  return (
    <Container>
      <Nav>
        <Header>
          <HeaderText>Welcome</HeaderText>
          <HeaderUser>
            <HeaderUserAvatar src="https://anhdo95.github.io/images/my-avatar-400w55db49248c89c33f5fc4a33c7ad45c05.jpg" />
            <HeaderUserEmail>anhdo5995@gmail.com</HeaderUserEmail>
          </HeaderUser>
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
