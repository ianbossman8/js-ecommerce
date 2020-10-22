import { item1, item2, item3 } from '../mock'
import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  FETCH_ERROR,
  FETCHING,
  ADD_ITEM,
  REMOVE_ITEM,
  CHECKOUT_BASKET,
} from '../actions'

const initialState = {
  items: {
    ...item1,
    ...item2,
    ...item3,
  },
  error: undefined,
  isFetching: false,
}

function quantityModifier(state, item, positive) {
  return {
    ...state,
    items: {
      ...state.items,
      [item]: {
        ...state.items[item],
        quantity: positive
          ? state.items[item].quantity + 1
          : state.items[item].quantity - 1,
      },
    },
    isFetching: false,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (typeof state.items[action.payload.key] !== 'undefined') {
        return quantityModifier(state, action.payload.key, true)
      }

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.key]: {
            ...action.payload.value,
          },
        },
        isFetching: false,
      }
    case REMOVE_ITEM:
      delete state.items[action.payload]

      return {
        ...state,
        isFetching: false,
      }
    case INCREMENT_QUANTITY:
      return quantityModifier(state, action.payload, true)
    case DECREMENT_QUANTITY:
      return quantityModifier(state, action.payload, false)
    case CHECKOUT_BASKET:
      return {
        ...state,
        items: {},
      }
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state
  }
}
