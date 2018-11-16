import React, { Component } from "react";
import axios from "axios";
import BookingCard from "../BookingCard/BookingCard";
import Loader from "../Loader/Loader";
import AlertFetchFail from "../AlertFetchFail/AlertFetchFail";
import AlertDisappearing from "../AlertDisappearing/AlertDisappearing";
import { isEmpty } from "lodash";
import { api } from "../../config";
import styles from "./BookingCardsList.module.scss";


class BookingCardsList extends Component {
  state = {
    loading: false,
    showAlert: false,
    alertMessage: "",
    alertType: "success",
    bookings: []
  };

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = async () => {
    const { params } = this.props.match;
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `${api.url}/mybookings/${params.userId}`
      );
      this.setState({ loading: false, bookings: response.data });
    } catch (error) {
      this.setState({ loading: false });
      console.warn("nie udało się pobrac rezerwacji");
    }
  };

  onClickDeleteBooking = async bookingId => {
    this.setState({ deleting: true });
    try {
      await axios.delete(`${api.url}/bookings/${bookingId}`);
      this.setState({
        showAlert: true,
        alertMessage: "rezerwacja została usunięta!",
      });
      setTimeout(() => {
        this.fetchBookings();
        this.setState({
          showAlert: false,
          });
      }, 2800);

    } catch (error) {
      this.setState({
        deleting: false,
        showAlert: true,
        alertMessage: "rezerwacja nie została usunięta, spróbuj ponownie",
        alertType: "error"
      });
      setTimeout(() => {
        this.setState({
          showAlert: false,
          });
      }, 2800);


      console.warn("usuwanie nie powiodło się");
    }
  };

  render() {
    const {
      bookings,
      loading,
      showAlert,
      alertMessage,
      alertType
    } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (isEmpty(bookings)) {
      return <AlertFetchFail />;
    }

    return (
      <div className={styles.container}>
        <AlertDisappearing
          showAlertContainer={showAlert}
          message={alertMessage}
          type={alertType}
        />
        {bookings.map(booking => {
          return (
            <BookingCard
              {...booking}
              key={booking.bookingId}
              onClickDeleteBooking={() =>
                this.onClickDeleteBooking(booking.bookingId)
              }
            />
          );
        })}
      </div>
    );
  }
}

export default BookingCardsList;
