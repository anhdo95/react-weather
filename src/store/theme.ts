import { createSlice } from '@reduxjs/toolkit'
import State from './state'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    openSlideMenu: false
  },
  reducers: {
    toggleSlideMenu(state) {
      state.openSlideMenu = !state.openSlideMenu
    },
    closeSlideMenu(state) {
      state.openSlideMenu = false
    }
  }
})

export const reducer = themeSlice.reducer

export const selectOpenSlideMenu = (state: State) =>
  state.theme.openSlideMenu

export const { toggleSlideMenu, closeSlideMenu } = themeSlice.actions
