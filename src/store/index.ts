import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { reducer as userReducer } from './user'
import { reducer as themeReducer } from './theme'
import { reducer as weatherReducer } from './weather'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  weather: weatherReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export default store