import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { getCities } from '@/services/firebase'

import State from './state'

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    userCities: []
  },
  reducers: {
    setUserCities(state, action) {
      state.userCities = action.payload
    },
  }
})

export const reducer = weatherSlice.reducer

// Selectors
export const selectUserCities = (state: State) => state.weather.userCities

// Actions
export const { setUserCities } = weatherSlice.actions

// Thunks
export const fetchUserCities = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const state = getState()
      const citiesSnapshot = await getCities(state.user.currentUser.uid)
      const cities = citiesSnapshot.toJSON()

      dispatch(setUserCities(Object.keys(cities || {})))
    } catch (error) {
      console.error(error)
    }
  }
}
