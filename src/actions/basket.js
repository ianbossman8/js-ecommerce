export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CHECKOUT_BASKET = 'CHECKOUT_BASKET'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCHING = 'FETCHING'

export function modifyBasket(type, payload) {
  return async function (dispatch, getState, { netlifyApi }) {
    dispatch(fetchingAction())

    try {
      const result = await fetch(netlifyApi)
      const parsedJson = await result.json()

      if (result.status === 200) {
        const state = getState()

        if (
          type === DECREMENT_QUANTITY &&
          state.basket.items[payload].quantity <= 1
        ) {
          return dispatch({
            type: REMOVE_ITEM,
            payload,
          })
        }

        return dispatch({
          type,
          payload,
        })
      }

      dispatch(errorCatcher(parsedJson))
    } catch (error) {
      dispatch(errorCatcher(error))
    }
  }
}

function errorCatcher(error) {
  return {
    type: FETCH_ERROR,
    error,
  }
}

function fetchingAction() {
  return {
    type: FETCHING,
  }
}
