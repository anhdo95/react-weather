import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import querystring from 'querystring'

import { signIn, signInWithGoogle } from '@/services/firebase'
import { ReactComponent as GoogleSvg } from '@/assets/svg/google.svg'

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

const FormActions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`

const LoginButton = styled.button.attrs(() => ({
  type: 'submit',
  className: 'form-button form-button--primary'
}))`
  width: 100%;
  max-width: 200px;
`

const GoogleIcon = styled(GoogleSvg)`
  width: 24px;
  height: 24px;
`

const LoginWithGoogleButton = styled.button.attrs(() => ({
  className: 'form-button',
  type: 'button'
}))`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.25rem;
  align-items: center;
  width: 100%;
  max-width: 220px;
`

const SignupLinkContainer = styled.div`
  margin-top: 2rem;
`

const SignupLinkNotice = styled.span``

const SignupLink = styled(Link)`
  margin-left: 0.25rem;
  text-decoration: none;
  color: var(--color-secondary);
`

enum FormControlName {
  Email = 'email',
  Password = 'password'
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const history = useHistory()
  const location = useLocation()

  const redirectToTarget = useCallback(() => {
    const query = querystring.parse(location.search)

    history.push((query.redirectUrl as string) || '/')
  }, [location.search, history])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      setError(null)

      try {
        await signIn(email, password)
        redirectToTarget()
      } catch (e) {
        setError(e.message)
      }
    },
    [email, password, redirectToTarget]
  )

  const googleSignIn = useCallback(async () => {
    try {
      await signInWithGoogle()
      redirectToTarget()
    } catch (e) {
      setError(e.message)
    }
  }, [redirectToTarget])

  const handleChange = useCallback(({ target }) => {
    const setter = {
      email: setEmail,
      password: setPassword
    }[target.name as FormControlName]

    setter(target.value)
  }, [])

  return (
    <Container>
      <Card>
        <CardContent>
          <CardHeading>Login</CardHeading>
          <Form onSubmit={handleSubmit}>
            <summary className="form-error">{error}</summary>
            <FormInput
              type="email"
              name={FormControlName.Email}
              autoFocus
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              type="password"
              name={FormControlName.Password}
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <FormActions>
              <LoginButton>Login</LoginButton>
              <LoginWithGoogleButton onClick={googleSignIn}>
                <GoogleIcon />
                Google
              </LoginWithGoogleButton>
            </FormActions>
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
