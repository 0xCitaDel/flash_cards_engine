import CardItem from '@components/FlashCardsPage/CardsRender/CardItem'
import { CSSTransition } from 'react-transition-group'
import style from './FlippableCard.module.css'
import React, { useState } from 'react'

const FlippableCard = ({cards, currentCard}) => {

  const [showFront, setShowFront] = useState(true)

  return (
    <div>
      <div className={style.container}>
        <CSSTransition 
          in={showFront}
          timeout={50}
          classNames='flip'
        >
          <CardItem onClick={() => {
            setShowFront((v) => !v)
          }}
          cards={cards}
          currentCard={currentCard}/>
        </CSSTransition>
      </div> 
    </div>
  ) 
}

export default FlippableCard
