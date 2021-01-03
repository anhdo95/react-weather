import { createSlice } from '@reduxjs/toolkit'
import firebase from 'firebase'

import State from './state'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem('isLoggedIn') as string),
    currentUser: JSON.parse(
      localStorage.getItem('currentUser') as string
    ) as firebase.User
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
