import styled, { css } from 'styled-components'
import { ModifyButton } from '../../App.styles'
import { Title } from '../../App.styles'

const columnFlexBox = css`
  display: flex;
  flex-direction: column;
`

export const BagBox = styled.div`
  height: 500px;
  ${columnFlexBox}
  padding: 0 16px;

  ${Title} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const BagItemContainer = styled.div`
  ${columnFlexBox}
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const BagItemBox = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`

export const BagItemImg = styled.img`
  width: 90px;
  height: 120px;
  font-size: 11px;
  background-color: white;
`

export const BagItemDescriptionBox = styled.div`
  width: 55%;
  height: inherit;
  display: flex;
`

export const BagItemDescription = styled.div`
  ${columnFlexBox}
`

export const QuantityBox = styled.div`
  ${columnFlexBox}
  padding-top: 16px;
`

export const IncrementerButton = styled.button`
  border: none;
  width: 16px;
  border-radius: 4px;
  outline: none;
  padding: 0;
  cursor: pointer;
`

export const QuantityInput = styled.div`
  display: flex;
  margin-top: 4px;

  button:first-child {
    margin-right: 14px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button:last-child {
    margin-left: 14px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const DeleteButton = styled(ModifyButton)`
  margin-top: auto;
  color: inherit;
`
