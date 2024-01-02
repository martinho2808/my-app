import { configureStore } from '@reduxjs/toolkit'
import { linkReducer } from './Link/reducers'
import authReducer from './authSlice'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    authStore: authReducer,
    linksStore: linkReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

