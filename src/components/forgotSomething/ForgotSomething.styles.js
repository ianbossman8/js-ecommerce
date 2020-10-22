import styled from 'styled-components'

export const ForgotSomethingContainer = styled.div`
  width: calc(350px - 16px);
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`

export const ProductsContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const ProductBox = styled.div`
  width: 120px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  padding-bottom: 16px;
`

export const ProductImg = styled.img`
  width: inherit;
  height: 150px;
  font-size: 11px;
  background-color: white;
`
