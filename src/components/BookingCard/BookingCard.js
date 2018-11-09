import React from "react";
import CardContent from "../CardContent/CardContent";
import BookingDetails from "../BookingDetails/BookingDetails";
import PropTypes from "prop-types";
import styles from "./BookingCard.module.scss";

const BookingCard = ({numberOfSeats,hourOfSeance, onClickDeleteBooking, ...restBooking}) => {
  return (
    <div className={styles.container}>
      <CardContent {...restBooking} />
      <BookingDetails
        numberOfSeats={numberOfSeats}
        hourOfSeance={hourOfSeance}
        onClickDeleteBooking={onClickDeleteBooking}
      />
    </div>
  );
};

BookingCard.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  hourOfSeance: PropTypes.string.isRequired,
  onClickDeleteBooking: PropTypes.func.isRequired,
};

export default BookingCard;
