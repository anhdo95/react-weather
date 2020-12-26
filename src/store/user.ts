import { createSlice } from '@reduxjs/toolkit'

interface State {
  user: {
    isAuthenticated: boolean
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload
    }
  }
})

export const reducer = userSlice.reducer

export const selectIsAuthenticated = (state: State) =>
  state.user.isAuthenticated

export const { setIsAuthenticated } = userSlice.actions
