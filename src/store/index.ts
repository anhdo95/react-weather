import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { reducer as userReducer } from './user'
import { reducer as themeReducer } from './theme'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export default store