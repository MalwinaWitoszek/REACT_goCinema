import React, { Component } from 'react';
import Card from '../Card/Card'
import styles from './CardsList.module.scss'

const data = [
  {
    title: "First Man",
    releaseDate: "18.10.2018",
    desc:
      "Fragment życia astronauty Neila Armstronga i jego legendarnej misji kosmicznej, dzięki której jako pierwszy człowiek stanął na Księżycu.",
    duration: 8460,
    img: "https://i.imgur.com/0oo7XJc.jpg",
    rating: 4,
    ratingDesc: true,
    allowClear: true,
    soldedOut: false,
    alert: {
      message: "Nowość!",
      type: "success"
    },
    id: 1
  },
  {
    title: "Mission: Impossible - Fallout",
    desc:
      "Konsekwencje zakończonej niepowodzeniem misji IMF może odczuć cały świat. Aby zapobiec katastrofie, Ethan Hunt i jego zespół muszą stanąć do wyścigu z czasem.",
    duration: 8820,
    releaseDate: "09.09.2018",
    img: "https://i.imgur.com/rOXaXH6.jpg",
    rating: 5,
    ratingDesc: true,
    allowClear: true,
    soldedOut: false,
    alert: {
      message: "Ostatnie miejsca",
      type: "warning"
    },
    id: 2
  },
  {
    title: "American Animals",
    releaseDate: "01.09.2018",
    desc:
      "Wracając od kolegi, Will zauważa coś przerażającego. Pobliskie laboratorium rządowe skrywa złowrogą tajemnicę. Ogólnie jest nie za wesoło," +
      " ale wszystko kończy się dobrze i żyją długo i szczęśliwie.",
    duration: 3200,
    img: "https://i.imgur.com/3koreob.jpg",
    rating: 3,
    ratingDesc: false,
    allowClear: false,
    soldedOut: true,
    alert: {
      message: "Wyprzedane",
      type: "error"
    },
    id: 3
  }
];

class CardsList extends Component {
  render() {
    return (
      <div className={styles.container}>
        {data.map(film => (
          <Card {...film} key={film.id} />
        ))}
      </div>
    );
  }
}

export default CardsList;
