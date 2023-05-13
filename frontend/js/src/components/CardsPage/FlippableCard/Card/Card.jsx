import style from './Card.module.css'
import './FlipTransition.css'

const Card = ({onClick, cards, currentCard}) => {
  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.back}>{cards[currentCard].ru_expression}</div> 
      <div className={style.front}>{cards[currentCard].en_expression}</div> 
    </div>
  )
}

export default Card
