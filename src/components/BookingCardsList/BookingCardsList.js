import React, { Component } from 'react';
import BookingCard from '../BookingCard/BookingCard'
import PropTypes from 'prop-types';
import styles from './BookingCardsList.module.scss';

const bookings = [
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
    id: 1,
    numberOfSeats: 2,
    hourOfSeance: '17.30',
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
    id: 3,
    numberOfSeats: 1,
    hourOfSeance: '20.00',
  }
];

class BookingCardsList extends Component {
  render() {
    return (
      <div>
      {bookings.map(booking => {
        return (
          <BookingCard {...booking}/>
        )
      })}
      </div>
    );
  }
}

BookingCardsList.propTypes = {

};

export default BookingCardsList;