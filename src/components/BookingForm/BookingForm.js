import React, { Component } from "react";
import Button from "../Button/Button";
import HourPanel from "../HourPanel/HourPanel";
import PropTypes from "prop-types";
import styles from "./BookingForm.module.scss";

const seances = [
  {
    hour: "17.00",
    id: 1
  },
  {
    hour: "19.00",
    id: 2
  },
  {
    hour: "21.00",
    id: 3
  }
];




class BookingForm extends Component {

  onClickHourPanel = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div >
      <span>wybierz godzine</span>
        <div className={styles.seancesHourContainer}>
          {seances.map(seance => {
            return <HourPanel
            key={seance.id}
            id={seance.id}
            hour={seance.hour}
            onClick={() => this.onClickHourPanel(seance.id)}
            />;
          })}
        </div>

        <div className={styles.container}>
          <div>
            <label htmlFor="nazwa inputa">podaj ilosc miejsc</label>
            <input
              type="text"
              name="nazwa inputa"
              placeholder="np. 2"
              value={null}
              onChange={this.onChange}
            />
          </div>
          <Button />
        </div>
      </div>
    );
  }
}

BookingForm.propTypes = {};

export default BookingForm;
