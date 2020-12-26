import { createSlice } from '@reduxjs/toolkit'

interface State {
  user: {
    isAuthenticated: boolean
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {}
})

export const reducer = userSlice.reducer

export const selectedIsAuthenticated = (state: State) => state.user.isAuthenticated