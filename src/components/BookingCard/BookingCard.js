import React from "react";
import CardContent from "../CardContent/CardContent";
import BookingDetails from "../BookingDetails/BookingDetails";
import { formatTime } from '../../utils'
import PropTypes from "prop-types";
import styles from "./BookingCard.module.scss";

const BookingCard = ({reservedSetas, reservedTime, onClickDeleteBooking, ...restBooking}) => {
  return (
    <div className={styles.container}>
      <CardContent {...restBooking} />
      <BookingDetails
        numberOfSeats={reservedSetas}
        hourOfSeance={formatTime(reservedTime)}
        onClickDeleteBooking={onClickDeleteBooking}
      />
    </div>
  );
};

BookingCard.propTypes = {
  numberOfSeats: PropTypes.number,
  hourOfSeance: PropTypes.string,
  onClickDeleteBooking: PropTypes.func,
};

export default BookingCard;
