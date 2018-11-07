import React from "react";
import Button from '../Button/Button'
import PropTypes from "prop-types";
import styles from './BookingDetails.module.scss'

const BookingDetails = ({numberOfSeats,hourOfSeance}) => {
  return (
    <div className={styles.container}>
      <p>
        <span>Godzina rezerwacji: </span>
        {hourOfSeance}
      </p>
      <p>
        <span>Ilość miejsc: </span>
       {numberOfSeats}
      </p>
      <Button text="Usuń"/>
    </div>
  );
};

BookingDetails.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  hourOfSeance: PropTypes.string.isRequired
};

export default BookingDetails;
