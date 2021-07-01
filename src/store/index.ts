import { allReducers } from './combineStore'

import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk, logger)),
)
