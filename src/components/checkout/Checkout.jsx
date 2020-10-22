import React from 'react'
import { CheckoutBox, CheckoutButton, CheckoutBoxTop } from './Checkout.styles'
import { Title, SupportText } from '../../App.styles'

function Checkout(props) {
  return (
    <CheckoutBox>
      <CheckoutBoxTop>
        <Title>estimated total</Title>
        <Title>£{props.basketValue}</Title>
      </CheckoutBoxTop>
      <CheckoutButton onClick={props.handleCheckout}>Check out</CheckoutButton>
      <SupportText>
        By checking out, I agree to the Term of Use and acknowledge that I have
        read the Privacy Policy. Shipping and promotions calculated in checkout
      </SupportText>
    </CheckoutBox>
  )
}

export default Checkout
