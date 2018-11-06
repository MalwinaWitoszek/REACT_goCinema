import React, { Component } from "react";
import Button from "../Button/Button";
import HourPanel from "../HourPanel/HourPanel";
import PropTypes from "prop-types";
import styles from "./BookingForm.module.scss";


const BookingForm = ({
  seancesHours,
  hourOfSeance,
  activeSeanceId,
  onClickHourPanel
}) => {
  return (
    <div>
      <span>Wybierz godzinę:</span>
      <div className={styles.seancesContainer}>
        {seancesHours.map(seance => {
          return (
            <HourPanel
              key={seance.id}
              activeClass = { seance.id === activeSeanceId && styles.activeSeance}
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
            type="text"
            name="seatsNumber"
            placeholder=" np. 2"
            // onChange={this.onChange}
          />
        </div>
        <Button />
      </div>
    </div>
  );
};

BookingForm.propTypes = {};

export default BookingForm;
