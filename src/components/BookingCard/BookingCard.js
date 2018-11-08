import React from "react";
import CardContent from "../CardContent/CardContent";
import BookingDetails from "../BookingDetails/BookingDetails";
import PropTypes from "prop-types";
import styles from "./BookingCard.module.scss";


const BookingCard = ({numberOfSeats,hourOfSeance, ...restBooking}) => {
  return (
    <div className={styles.container}>
      <CardContent {...restBooking} />
      <BookingDetails
        numberOfSeats={numberOfSeats}
        hourOfSeance={hourOfSeance}
      />
    </div>
  );
};

BookingCard.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  hourOfSeance: PropTypes.string.isRequired
};

export default BookingCard;
