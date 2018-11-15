import React from "react";
import Button from "../Button/Button";
import HourPanel from "../HourPanel/HourPanel";
import Alert from "../Alert/Alert";
import { formatTime } from '../../utils'
import PropTypes from "prop-types";
import styles from "./BookingForm.module.scss";

const BookingForm = ({
  seancesHours,
  numberOfSeats,
  activeSeance,
  errorMessage,
  isSendingData,
  // soldetOut,
  isReservationDone,
  bookingMessage,
  extraStyle,
  onClickHourPanel,
  onChangeInputSeats,
  onSubmitFormBooking
}) => {
  return (

    <form onSubmit={onSubmitFormBooking} className={extraStyle}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Wybierz godzinę:</p>
          <div className={styles.seancesContainer}>
            {seancesHours.map((seance,index) => {
              return (
                <HourPanel
                  key={index}
                  activeClass={
                    seance === activeSeance && styles.activeSeance
                  }
                  hour={formatTime(seance)}
                  onClick={() => onClickHourPanel(seance)}
                />
              );
            })}
          </div>
        </div>

        <div className={styles.container}>
          <label htmlFor="seatsNumber">Podaj ilość miejsc: </label>
          <input
            type="number"
            min="1"
            name="seatsNumber"
            value={numberOfSeats}
            placeholder="0"
            onChange={onChangeInputSeats}
          />
        </div>
        <Button
          type="submit"
          disabledButton={isSendingData}
          // soldetOut={soldetOut}
          extraStyleContainer={styles.buttonConfirmBookingContainer}
          extraStyle={styles.buttonConfirmBooking}
        />
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
      {isReservationDone && bookingMessage && (
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

BookingForm.propTypes = {
  seancesHours: PropTypes.arrayOf(PropTypes.string),
  numberOfSeats: PropTypes.string,
  activeSeance: PropTypes.string,
  errorMessage: PropTypes.string,
  isReservationDone: PropTypes.bool,
  bookingMessage: PropTypes.string,
  onClickHourPanel: PropTypes.func,
  onChangeInputSeats: PropTypes.func,
  onSubmitFormBooking: PropTypes.func
};

export default BookingForm;
