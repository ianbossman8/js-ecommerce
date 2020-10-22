import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { BasketLayout } from './Basket.styles'
import { Bag } from '../bag'
import { ForgotSomething } from '../forgotSomething'
import { Checkout } from '../checkout'

import {
  modifyBasket,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_ITEM,
  CHECKOUT_BASKET,
} from '../../actions'

const basketStateSelector = (state) => state.basket
const productsStateSelector = (state) => state.products
const basketTotalValue = createSelector(basketStateSelector, (basketItem) =>
  Object.keys(basketItem.items).length > 0
    ? Object.values(basketItem.items).reduce(
        (acc, cur) => acc + cur.quantity * cur.price,
        0
      )
    : 0
)

function Basket(props) {
  const basket = useSelector(basketStateSelector)
  const products = useSelector(productsStateSelector)
  const basketValue = useSelector(basketTotalValue)

  const dispatch = useDispatch()

  const handleIncrement = useCallback(
    (key) => {
      return dispatch(modifyBasket(INCREMENT_QUANTITY, key))
    },
    [dispatch]
  )

  const handleDencrement = useCallback(
    (key) => {
      return dispatch(modifyBasket(DECREMENT_QUANTITY, key))
    },
    [dispatch]
  )

  const handleRemove = useCallback(
    (key) => {
      return dispatch(modifyBasket(REMOVE_ITEM, key))
    },
    [dispatch]
  )

  const handleCheckout = useCallback(() => {
    return dispatch(modifyBasket(CHECKOUT_BASKET))
  }, [dispatch])

  return (
    <BasketLayout showBasket={props.showBasket} windowWidth={props.windowWidth}>
      <Bag
        basketItems={basket.items}
        deleteItem={handleRemove}
        quantityModifier={{ handleIncrement, handleDencrement }}
        windowWidth={props.windowWidth}
        setShowBasket={props.setShowBasket}
      />
      <ForgotSomething products={products} />
      <Checkout basketValue={basketValue} handleCheckout={handleCheckout} />
    </BasketLayout>
  )
}

export default Basket
