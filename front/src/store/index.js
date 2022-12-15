import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../reducer/index"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
})


export default store;