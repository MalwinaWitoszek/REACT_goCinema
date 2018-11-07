import React from "react";
import CardContent from "../CardContent/CardContent";
import BookinDetails from "../BookingDetails/BookingDetails";
import PropTypes from "prop-types";
import styles from "./BookingCard.module.scss";


const BookingCard = ({numberOfSeats,hourOfSeance, ...restBooking}) => {
  return (
    <div className={styles.container}>
      <CardContent {...restBooking} />
      <BookinDetails
        numberOfSeats={numberOfSeats}
        hourOfSeance={hourOfSeance}
      />
      Link powrotu
    </div>
  );
};

BookingCard.propTypes = {};

export default BookingCard;
