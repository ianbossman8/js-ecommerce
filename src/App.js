import React, { useEffect, useState } from 'react'
import { Layout, MainContent, Header, Body, IconButton } from './App.styles'
import { Basket } from './components/basket'
import BasketIcon from './asset/Basket'

function App() {
  const [windowWidth, setWindowWidth] = useState()
  const [showBasket, setShowBasket] = useState(true)

  useEffect(() => {
    function handleResize(e) {
      if (e.currentTarget.innerWidth < 350) {
        return setWindowWidth(e.currentTarget.innerWidth)
      }

      setWindowWidth(undefined)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth <= 350) {
      return setShowBasket(false)
    }

    return setShowBasket(true)
  }, [windowWidth])

  function handleBasketIconClick() {
    setShowBasket(!showBasket)
  }

  return (
    <Layout>
      <MainContent>
        <Header>
          YYT
          <IconButton onClick={handleBasketIconClick}>{BasketIcon}</IconButton>
        </Header>
        <Body>Shopping area</Body>
      </MainContent>
      <Basket
        showBasket={showBasket}
        windowWidth={windowWidth}
        setShowBasket={setShowBasket}
      />
    </Layout>
  )
}

export default App
