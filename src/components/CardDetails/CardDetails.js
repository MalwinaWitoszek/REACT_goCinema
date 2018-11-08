import React, { Component } from "react";
import CardContent from "../CardContent/CardContent";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./CardDetails.module.scss";

class CardDetails extends Component {
  state = {
    film: {
      id: 1,
      title: "First Man",
      releaseDate: "18.10.2018",
      desc:
        "Fragment życia astronauty Neila Armstronga i jego legendarnej misji kosmicznej, dzięki której jako pierwszy człowiek stanął na Księżycu.",
      duration: 8460,
      img: "https://i.imgur.com/0oo7XJc.jpg",
      rating: 4,
      ratingDesc: true,
      allowClear: true,
      soldedOut: false,
      alert: {
        message: "Nowość!",
        type: "success"
      }
    },
    seancesHours: [
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
    ],
    numberOfSeats: "",
    hourOfSeance: null,
    activeSeanceId: null,
    errorMessage: null,
    bookingMessage: null
  };

  onClickHourPanel = (seanceId, hourOfSeance) => {
    this.setState({
      activeSeanceId: seanceId,
      hourOfSeance: hourOfSeance
    });
  };

  onChangeInput = e => {
    this.setState({
      numberOfSeats: e.target.value
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { numberOfSeats, hourOfSeance } = this.state;

    // checking if the hour of seance and number of seats have been given
    if (!hourOfSeance && !numberOfSeats) {
      return this.setState({
        errorMessage: "Proszę wybrać godzinę seansu i ilość miejsc"
      });
    }
    if (!hourOfSeance) {
      return this.setState({
        errorMessage: "Proszę wybrać godzinę seansu"
      });
    }
    if (!numberOfSeats) {
      return this.setState({
        errorMessage: "Proszę podać ilość miejsc"
      });
    }

    // clearing errorMessage when everything was given
    this.setState({
      errorMessage: null
    });

    this.setState({
      bookingMessage: `ilość zarezerwowanych miejsc: ${numberOfSeats}, godzina seansu: ${hourOfSeance}`
    });
  };

  render() {
    const { film, ...rest } = this.state;
    return (
      <div className={styles.container}>
        <CardContent {...film} />
        <BookingForm
          {...rest}
          extraStyle={styles.BookingFormWrapper}
          onClickHourPanel={this.onClickHourPanel}
          onChangeInput={this.onChangeInput}
          onSubmitForm={this.onSubmitForm}
        />
        Link powrotu
      </div>
    );
  }
}

export default CardDetails;
