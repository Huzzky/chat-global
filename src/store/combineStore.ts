import { chatReducer } from './reducers/chatReducer'
import { authReducer } from './reducers/authReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
  authReducer,
  chatReducer,
})
