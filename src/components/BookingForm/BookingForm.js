import React, { Component } from "react";
import Button from "../Button/Button";
import HourPanel from "../HourPanel/HourPanel";
import Alert from "../Alert/Alert";
import PropTypes from "prop-types";
import styles from "./BookingForm.module.scss";

const BookingForm = ({
  seancesHours,
  hourOfSeance,
  numberOfSeats,
  activeSeanceId,
  errorMessage,
  bookingMessage,
  onClickHourPanel,
  onChangeInput,
  onSubmitForm
}) => {
  return (
    <form id="bookingForm" onSubmit={onSubmitForm}>
      <div className={styles.seancesContainer}>
        <span>Wybierz godzinę:</span>
        {seancesHours.map(seance => {
          return (
            <HourPanel
              key={seance.id}
              activeClass={seance.id === activeSeanceId && styles.activeSeance}
              id={seance.id}
              hour={seance.hour}
              onClick={() => onClickHourPanel(seance.id, seance.hour)}
            />
          );
        })}
      </div>

      <div className={styles.container}>
        <div>
          <label htmlFor="seatsNumber">Podaj ilość miejsc: </label>
          <input
            type="number"
            min="1"
            name="seatsNumber"
            value={numberOfSeats}
            placeholder="0"
            onChange={onChangeInput}
          />
        </div>
        <Button  type="submit" form="bookingForm" />
      </div>
      {errorMessage && (
        <Alert
          alert={{
            message: errorMessage,
            type: "error"
          }}
          extraStyleContainer={styles.alertBookingContainer}
          extraStyleMessage={styles.alertBookingMessage}
        />
      )}
      {bookingMessage && (
        <Alert
          alert={{
            message: bookingMessage,
            type: "success"
          }}
          extraStyleContainer={styles.alertBookingContainer}
          extraStyleMessage={styles.alertBookingMessage}
        />
      )}
    </form>
  );
};

BookingForm.propTypes = {};

export default BookingForm;
