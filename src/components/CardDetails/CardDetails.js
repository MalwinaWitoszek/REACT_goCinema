import axios from "axios";
import { isEmpty } from "lodash";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { api } from "../../config";
import { formatTime } from "../../utils";
import AlertDisappearing from "../AlertDisappearing/AlertDisappearing";
import AlertFetchFail from "../AlertFetchFail/AlertFetchFail";
import BookingForm from "../BookingForm/BookingForm";
import CardContent from "../CardContent/CardContent";
import Loader from "../Loader/Loader";
import styles from "./CardDetails.module.scss";

class CardDetails extends Component {
 
  state = {
    loading: false,
    isSendingData: false,
    isReservationDone: false,
    showAlert: false,
    alertMessage: "",
    alertType: "success",
    movie: {},
    seancesHours: [],
    numberOfSeats: "",
    hourOfSeance: null,
    errorMessage: null,
    bookingMessage: null
  };

  componentDidMount() {
    this.fetchMovie();
  }

  // FETCH MOVIE
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
      console.warn("pobranie danych nie powiodło się");
    }
  };

  //CHOOSE HOUR OF SEANCE
  onClickHourPanel = seance => {
    this.setState({
      hourOfSeance: seance
    });
  };

  //CHOOSE NUMBER OF SEATS
  onChangeInputSeats = e => {
    this.setState({
      numberOfSeats: e.target.value
    });
  };

  //POST NEW BOOKING
  addBooking = async data => {
    this.setState({ isSendingData: true });
    try {
      await axios.post(`${api.url}/bookings`, data);
      this.setState({
        showAlert: true,
        alertMessage: "rezerwacja została wykonana!",
        isReservationDone: true
      });
      setTimeout(() => {
        this.setState({ isSendingData: false });
        this.props.history.push("/bookings/7");
      }, 2800);
    } catch (error) {
      this.setState({
        isSendingData: false,
        showAlert: true,
        alertMessage: "rezerwacja się nie udała, spróbuj ponownie",
        alertType: "error"
      });
      setTimeout(() => {
        this.props.history.push(`/movies`);
      }, 2800);
    }
  };

  //SUBMIT BOOKING FORM AND ADD NEW BOOKING
  onSubmitFormBooking = e => {
    e.preventDefault();
    const { params } = this.props.match;
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
    // setting bookingMessage when everything was given
    this.setState({
      bookingMessage: `ilość zarezerwowanych miejsc: ${numberOfSeats}, godzina seansu: ${formatTime(
        hourOfSeance
      )}`
    });

    // preparing data to post after submit
    const bookingData = {
      movieId: params.id,
      reservedSetas: numberOfSeats,
      reservedTime: hourOfSeance,
      userId: 7
    };

    // posting new booking with prepared data
    this.addBooking(bookingData);
  };

  render() {
    const {
      loading,
      isSendingData,
      showAlert,
      alertMessage,
      isReservationDone,
      alertType,
      movie,
      seancesHours,
      hourOfSeance,
      numberOfSeats,
      errorMessage,
      bookingMessage
    } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (isEmpty(movie)) {
      return <AlertFetchFail />;
    }

    return (
      <div className={styles.container}>
        <AlertDisappearing
          showAlertContainer={showAlert}
          message={alertMessage}
          type={alertType}
        />
        <CardContent {...movie} />
        <BookingForm
          numberOfSeats={numberOfSeats}
          errorMessage={errorMessage}
          isSendingData={isSendingData}
          isReservationDone={isReservationDone}
          bookingMessage={bookingMessage}
          seancesHours={seancesHours}
          activeSeance={hourOfSeance}
          availableSetas={movie.availableSetas}
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
