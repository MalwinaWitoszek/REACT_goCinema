import React from "react";
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
  soldetOut,
  bookingMessage,
  extraStyle,
  onClickHourPanel,
  onChangeInput,
  onSubmitForm
}) => {
  return (
    <form onSubmit={onSubmitForm} className={extraStyle}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Wybierz godzinę:</p>
          <div className={styles.seancesContainer}>
            {seancesHours.map(seance => {
              return (
                <HourPanel
                  key={seance.id}
                  activeClass={
                    seance.id === activeSeanceId && styles.activeSeance
                  }
                  id={seance.id}
                  hour={seance.hour}
                  onClick={() => onClickHourPanel(seance.id, seance.hour)}
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
            onChange={onChangeInput}
          />
        </div>
        <Button
          type="submit"
          soldetOut={soldetOut}
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

BookingForm.propTypes = {
  seancesHours: PropTypes.arrayOf(PropTypes.object),
  hourOfSeance: PropTypes.string,
  numberOfSeats: PropTypes.string,
  activeSeanceId: PropTypes.number,
  errorMessage: PropTypes.string,
  bookingMessage: PropTypes.string,
  onClickHourPanel: PropTypes.func,
  onChangeInput: PropTypes.func,
  onSubmitForm: PropTypes.func
};

export default BookingForm;
