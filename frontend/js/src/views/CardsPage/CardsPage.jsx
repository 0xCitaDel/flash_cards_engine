import { useEffect, useState } from 'react'
import { getApiResource  } from '@utils/network'
import { CARDS_ORANGE } from '@constants/api'
import Card from '@components/CardsPage/Cards'


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
    getResource(CARDS_ORANGE)
  }, [])
  
  return (
    <>
      { cards && <Card cards={cards}/> }
    </> 
  )
}

export default CardsPage
