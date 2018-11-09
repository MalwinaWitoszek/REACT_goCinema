import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import styles from "./BookingDetails.module.scss";

const BookingDetails = ({ numberOfSeats, hourOfSeance, onClickDeleteBooking }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bookingDesc}>
        <p>
          <span>Godzina rezerwacji: </span>
          {hourOfSeance}
        </p>
        <p>
          <span>Ilość miejsc: </span>
          {numberOfSeats}
        </p>
      </div>

      <Button text="Usuń" extraStyle={styles.buttonDeleteBooking} onClickButton={onClickDeleteBooking} />
    </div>
  );
};

BookingDetails.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  hourOfSeance: PropTypes.string.isRequired,
  onClickDeleteBooking: PropTypes.func.isRequired,
};

export default BookingDetails;
