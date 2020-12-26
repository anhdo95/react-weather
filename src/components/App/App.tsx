import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { subscribeAuthChanged } from '@/services/firebase'
import { setCurrentUser, setIsAuthenticated } from '@/store/user'

import RouterOutlet from '@/components/RouterOutlet'
import Header from '@/components/Header'

import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = subscribeAuthChanged(user => {
      const isAuthenticated = !!user

      dispatch(setIsAuthenticated(isAuthenticated))
      dispatch(setCurrentUser(user))
      localStorage.setItem('isLoggedIn', JSON.stringify(isAuthenticated))
    })

    return unsubscribe
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <RouterOutlet />
      </main>
    </BrowserRouter>
  )
}

export default App
