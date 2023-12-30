import { configureStore } from '@reduxjs/toolkit'
import { linkReducer } from './Link/reducers'
import logger from 'redux-logger'


export const store = configureStore({
  reducer: {
    linksStore: linkReducer,
  },
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

