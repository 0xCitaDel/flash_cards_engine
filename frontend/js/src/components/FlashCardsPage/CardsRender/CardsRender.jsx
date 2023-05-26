import React, { useEffect, useState } from 'react'
import { getApiResource  } from '@utils/network'
import { API_LESSON } from '@constants/api'
import CardsLogic from './CardsLogic'


const CardsPage = () => {
  
  const [cards, setCards] = useState(null)
  
  const getResource = async (url) => {
    const res = await getApiResource(url)

    const cardsList = res.map(({en_expression, ru_expression}) => {
      return {
        en_expression,
        ru_expression
      }
    })

    setCards(cardsList)
  }

  useEffect(() => {
    getResource(API_LESSON)
  }, [])
  
  return (
    <>
      { cards && <CardsLogic  cards={cards}/> }
    </> 
  )
}

export default CardsPage
