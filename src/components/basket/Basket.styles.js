import styled from 'styled-components'

export const BasketLayout = styled.div`
  position: ${({ windowWidth }) => windowWidth < 350 && 'absolute'};
  width: 350px;
  display: ${({ showBasket }) => (showBasket ? 'grid' : 'none')};
  grid-template-rows: 3fr 2fr 1fr;
  background-image: linear-gradient(white, #f2f2f2);
`
