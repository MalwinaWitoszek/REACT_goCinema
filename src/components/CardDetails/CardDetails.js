import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CardContent from "../CardContent/CardContent";
import BookingForm from "../BookingForm/BookingForm";
import { api } from "../../config";
import styles from "./CardDetails.module.scss";

class CardDetails extends Component {
  // state = {
  //   film: {
  //     id: 1,
  //     title: "First Man",
  //     releaseDate: "18.10.2018",
  //     desc:
  //       "Fragment życia astronauty Neila Armstronga i jego legendarnej misji kosmicznej, dzięki której jako pierwszy człowiek stanął na Księżycu.",
  //     duration: 8460,
  //     img: "https://i.imgur.com/0oo7XJc.jpg",
  //     rating: 4,
  //     ratingDesc: true,
  //     allowClear: true,
  //     soldedOut: false,
  //     alert: {
  //       message: "Nowość!",
  //       type: "success"
  //     }
  //   },
  //   seancesHours: [
  //     {
  //       hour: "17.00",
  //       id: 1
  //     },
  //     {
  //       hour: "19.00",
  //       id: 2
  //     },
  //     {
  //       hour: "21.00",
  //       id: 3
  //     }
  //   ],
  //   numberOfSeats: "",
  //   hourOfSeance: null,
  //   activeSeanceId: null,
  //   errorMessage: null,
  //   bookingMessage: null
  // };
  state = {
    loading: false,
    isSendingData: false,
    movie: {},
    seancesHours: [],
    numberOfSeats: null,
    hourOfSeance: null,
    errorMessage: null,
    bookingMessage: null
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { params } = this.props.match;
    this.setState({ loading: true });
    try {
      const response = await axios.get(`${api.url}/movies/${params.id}`);
      this.setState({
        loading: false,
        movie: response.data,
        seancesHours: response.data.availableTimes
      });
    } catch (error) {
      this.setState({ loading: false });
      console.warn("blad", error);
    }
  };

  addBooking = async data => {
    this.setState({ isSendingData: true });
    try {
      this.setState({ isSendingData: false });
      await axios.post(`${api.url}/bookings`, data);
      alert("wysłano");
      this.props.history.push("/bookings/7");
    } catch (error) {
      this.setState({ isSendingData: false });
      console.warn("błąd", error);
    }
  };

  onClickHourPanel = seance => {
    this.setState({
      hourOfSeance: seance
    });
  };

  onChangeInputSeats = e => {
    this.setState({
      numberOfSeats: e.target.value
    });
  };

  onSubmitFormBooking = e => {
    e.preventDefault();
    const { params } = this.props.match;
    const { numberOfSeats, hourOfSeance } = this.state;
    console.log("miejsca", numberOfSeats, "godz", hourOfSeance);
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
    // setting bookingMessage when everything was given
    this.setState({
      bookingMessage: `ilość zarezerwowanych miejsc: ${numberOfSeats}, godzina seansu: ${hourOfSeance}`
    });

    const bookingData = {
      movieId: params.id,
      reservedSetas: numberOfSeats,
      reservedTime: hourOfSeance,
      userId: 7
    };

    this.addBooking(bookingData);
  };

  render() {
    const { movie, seancesHours, hourOfSeance } = this.state;
    return (
      <div className={styles.container}>
        <CardContent {...movie} />
        <BookingForm
          seancesHours={seancesHours}
          activeSeance={hourOfSeance}
          extraStyle={styles.BookingFormWrapper}
          onClickHourPanel={this.onClickHourPanel}
          onChangeInputSeats={this.onChangeInputSeats}
          onSubmitFormBooking={this.onSubmitFormBooking}
        />
        <NavLink className={styles.link} to="/movies">
          {" "}
          ⇦ Powrot
        </NavLink>
      </div>
    );
  }
}

export default CardDetails;
