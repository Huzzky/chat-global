import { authReducer } from './reducers/authReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  authReducer,
})
