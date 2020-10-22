import React from 'react'
import QuantityInputArea from './QuantityInput'
import {
  BagBox,
  BagItemContainer,
  BagItemBox,
  BagItemImg,
  BagItemDescriptionBox,
  BagItemDescription,
  DeleteButton,
} from './Bag.styles'
import CloseIcon from '../../asset/Close'
import { Title, Text, ModifyButton, IconButton } from '../../App.styles'

function Bag(props) {
  function handleBasketClose() {
    props.setShowBasket(false)
  }

  return (
    <BagBox>
      <Title secondary>
        your bag{' '}
        {props.windowWidth < 350 && (
          <IconButton onClick={handleBasketClose}>{CloseIcon}</IconButton>
        )}
      </Title>
      {Object.keys(props.basketItems).length === 0 ? (
        <Title>empty bag</Title>
      ) : (
        <BagItemContainer>
          {Object.entries(props.basketItems).map(([key, value]) => (
            <BagItemBox key={key}>
              <BagItemImg src={value.imgSrc} alt={key} />
              <BagItemDescriptionBox>
                <BagItemDescription>
                  <Text>{key}</Text>
                  <Text>{value.subtitle}</Text>
                  <Text>
                    size {value.size} <ModifyButton>(change)</ModifyButton>
                  </Text>
                  <DeleteButton onClick={() => props.deleteItem(key)}>
                    delete
                  </DeleteButton>
                  <QuantityInputArea
                    quantity={value.quantity}
                    itemIncrementer={() =>
                      props.quantityModifier.handleIncrement(key)
                    }
                    itemDecrementer={() =>
                      props.quantityModifier.handleDencrement(key)
                    }
                  />
                </BagItemDescription>
                <Text>£{value.price}</Text>
              </BagItemDescriptionBox>
            </BagItemBox>
          ))}
        </BagItemContainer>
      )}
    </BagBox>
  )
}

export default Bag
