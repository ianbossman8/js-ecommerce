import React from 'react'
import { QuantityBox, QuantityInput, IncrementerButton } from './Bag.styles'
import { Text } from '../../App.styles'

function QuantityInputArea(props) {
  return (
    <QuantityBox>
      <Text>quantity</Text>
      <QuantityInput>
        <IncrementerButton onClick={props.itemDecrementer}>-</IncrementerButton>
        <Text>{props.quantity}</Text>
        <IncrementerButton onClick={props.itemIncrementer}>+</IncrementerButton>
      </QuantityInput>
    </QuantityBox>
  )
}

export default QuantityInputArea
