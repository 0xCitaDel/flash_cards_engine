import style from './CardItem.module.css'
import './FlipTransition.css'
import React from 'react'
 
const CardItem = ({cards, currentCard, onClick}) => {
    return (
         
    <div className={style.card} onClick={onClick}>
        <div className={style.back}>{cards[currentCard].ru_expression}</div> 
        <div className={style.front}>{cards[currentCard].en_expression}</div> 
    </div>
    )
}

export default CardItem
