import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  ForgotSomethingContainer,
  ProductsContainer,
  ProductBox,
  ProductImg,
} from './ForgotSomething.styles'
import { modifyBasket, ADD_ITEM } from '../../actions'
import { Title, Text, ModifyButton } from '../../App.styles'

function ForgotSomething(props) {
  const dispatch = useDispatch()

  const { products } = props

  const handleAddClick = useCallback(
    function (key, value) {
      return dispatch(modifyBasket(ADD_ITEM, { key, value }))
    },
    [dispatch]
  )

  return (
    <ForgotSomethingContainer>
      <Title>forgot something?</Title>
      <ProductsContainer>
        {Object.keys(products).length === 0 ? (
          <Text>no products</Text>
        ) : (
          Object.entries(products).map(([key, value]) => (
            <ProductBox key={key}>
              <ProductImg src={value.imgSrc} alt={key} />
              <Text>{key}</Text>
              <ModifyButton onClick={() => handleAddClick(key, value)}>
                quick add
              </ModifyButton>
            </ProductBox>
          ))
        )}
      </ProductsContainer>
    </ForgotSomethingContainer>
  )
}

export default ForgotSomething
