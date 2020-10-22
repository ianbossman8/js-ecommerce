import { item1, item2, item3, item4 } from '../mock'

const initialState = { ...item1, ...item2, ...item3, ...item4 }

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
