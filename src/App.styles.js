import styled from 'styled-components'

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr max-content;

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`

export const Header = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: white;
`

export const Body = styled.div``

export const MainContent = styled.div`
  background-image: linear-gradient(to right, white, #f2f2f2);
`

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ secondary }) => secondary && 'rgba(0, 0, 0, 0.3)'};
`

export const Text = styled.span`
  font-size: 11px;
  text-transform: uppercase;
`

export const SupportText = styled.span`
  font-size: 9px;
`

export const ModifyButton = styled.button`
  width: max-content;
  background-color: inherit;
  border: none;
  padding: 0;
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
