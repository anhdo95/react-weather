import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background: linear-gradient(to top right, var(--color-primary), #f2f2f2);
`

const Card = styled.div`
  width: 90%;
  height: 35rem;
  max-width: 1024px;
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.85) 50%,
      transparent 50%
    ),
    url(https://anhdo95.github.io/Natours/img/nat-10.jpg);
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

const CardContent = styled.main`
  width: 50%;
  padding: 3rem;
  text-align: center;
`

const CardHeading = styled.h3.attrs(() => ({
  className: 'heading-primary'
}))`
  font-size: 2rem;
`

const Form = styled.form`
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
`

const FormInput = styled.input.attrs(() => ({
  className: 'form-control'
}))``

const FormSubmit = styled.button.attrs(() => ({
  type: 'submit',
  className: 'form-button'
}))`
  width: 100%;
  max-width: 200px;
`

const SignupLinkContainer = styled.div`
  margin-top: 2rem;
`

const SignupLinkNotice = styled.span`
`

const SignupLink = styled(Link)`
  margin-left: 0.25rem;
  text-decoration: none;
  color: var(--color-secondary);
`

function Login() {
  return (
    <Container>
      <Card>
        <CardContent>
          <CardHeading>Login</CardHeading>
          <Form>
            <FormInput type="email" autoFocus placeholder="Email" required />
            <FormInput type="password" placeholder="Password" required />
            <FormSubmit>Login</FormSubmit>
          </Form>
          <SignupLinkContainer>
            <SignupLinkNotice>Don't have an account?</SignupLinkNotice>
            <SignupLink to="/signup">Sign up</SignupLink>
          </SignupLinkContainer>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Login
