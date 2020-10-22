import { combineReducers } from 'redux'
import { basket, products } from '../reducers'

export default combineReducers({
  basket,
  products,
})
