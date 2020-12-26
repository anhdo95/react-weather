import firebase from 'firebase'
import { createSlice } from '@reduxjs/toolkit'

interface State {
  user: {
    isAuthenticated: boolean
    currentUser: firebase.User
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem('isLoggedIn') as string),
    currentUser: null
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const reducer = userSlice.reducer

// Selectors
export const selectIsAuthenticated = (state: State) =>
  state.user.isAuthenticated
export const selectCurrentUser = (state: State) => state.user.currentUser

// Actions
export const { setIsAuthenticated, setCurrentUser } = userSlice.actions
