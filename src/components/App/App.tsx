import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { subscribeAuthChanged } from '@/services/firebase'
import { setIsAuthenticated } from '@/store/user'

import RouterOutlet from '@/components/RouterOutlet'
import Header from '@/components/Header'

import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    subscribeAuthChanged(user => {
      const isAuthenticated = !!user

      dispatch(setIsAuthenticated(isAuthenticated))
      localStorage.setItem('isLoggedIn', JSON.stringify(isAuthenticated))
    })
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
