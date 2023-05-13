import style from './FlippableCard.module.css'
import Card from './Card'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

const FlippableCard = ({cards, currentCard}) => {

  const [showFront, setShowFront] = useState(true)

  return (
    <>
      <div className={style.container}>
        <CSSTransition 
          in={showFront}
          timeout={50}
          classNames='flip'
        >
          <Card onClick={() => {
            setShowFront((v) => !v)
          }}
          cards={cards}
          currentCard={currentCard}/>
        </CSSTransition>
      </div> 
    </>
  ) 
}

export default FlippableCard
