import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { reducer as userReducer } from './user'

const rootReducer = combineReducers({
  user: userReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export default store