import React, { Component } from 'react';
import Card from '../Card/Card'
import PropTypes from 'prop-types';
import styles from './CardsList.module.scss'

import BookingCardDetails from '../BookingCardDetails/BookingCardDetails'

class CardsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
      {
          data.map(film => (
              <Card
              key={film.id}
              id={film.id}
              img={film.img}
              title={film.title}
              releaseDate={film.releaseDate}
              duration={film.duration}
              desc={film.desc}
              soldedOut={film.soldedOut}
              rating={film.rating}
              ratingDesc={film.ratingDesc}
              allowClear={film.allowClear}
              alert={film.alert}
              />
          ))
      }
      <BookingCardDetails />

      </div>
    );
  }
}

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardsList;