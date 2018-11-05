import React from 'react'
import RatingStars from '../RatingStars/RatingStars'
import styles from './CardFooter.module.scss'

const CardFooter = (props) => {
  return (
    <div>
      <RatingStars {...props} />
      link
    </div>
  )
}


export default CardFooter
