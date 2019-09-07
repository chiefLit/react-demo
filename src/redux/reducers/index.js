import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const todoApp = combineReducers({
  todo: todoReducer
})

export default todoApp