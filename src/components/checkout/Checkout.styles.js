import styled from 'styled-components'

export const CheckoutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 16px;
  background-color: white;
`

export const CheckoutBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CheckoutButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`
