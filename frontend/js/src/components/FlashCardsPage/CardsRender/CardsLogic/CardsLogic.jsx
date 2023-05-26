import React, { useState } from 'react'
import style from './CardsLogic.module.css'
import FlippableCard from '../FlippableCard'

const Card = ({cards}) => {

  const optionsButton = [
    { name: 'Неправильно', value: 'false' },
    { name: 'Написание', value: 'falseSpelling' },
    { name: 'Правильно', value: 'true' }
  ]
 
  const [currentCard, setCurrentCard] = useState(0)
  
  const [groupingCards] = useState({
    correctAnswer: [],
    wrongSpellig: [],
    wrongAnswer: []
  })

  const handleAnswerOptionClick = (action) => {

    const nextCard = currentCard + 1
    
    if (nextCard < cards.length) {
      switch(action) {
        case 'true':
          groupingCards.correctAnswer.push(cards[currentCard])
          break
          
        case 'false':
          groupingCards.wrongAnswer.push(cards[currentCard])
          break
          
        case 'falseSpelling':
          groupingCards.wrongSpellig.push(cards[currentCard])
          break
          
        default:
          setCurrentCard(nextCard)
      } 
      setCurrentCard(nextCard)
    } else {
      console.log(groupingCards) 
    }
    
  }

  
  return (
    <>
      <div>
        <FlippableCard cards={cards} currentCard={currentCard}/>
      </div>
      <div className={style.buttons}>
        {optionsButton.map((item, index) => (
          <button 
            key={index}
            onClick={() => handleAnswerOptionClick(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </> 
  )
}

export default Card
