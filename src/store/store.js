import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const netlifyApi = 'http://localhost:9000/.netlify/functions/api'

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ netlifyApi }))
)
