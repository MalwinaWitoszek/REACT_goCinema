import React, { Component } from "react";
import axios from "axios";
import BookingCard from "../BookingCard/BookingCard";
import Loader from "../Loader/Loader";
import AlertFetchFail from "../AlertFetchFail/AlertFetchFail";
import { isEmpty } from "lodash";
import { api } from "../../config";
import styles from "./BookingCardsList.module.scss";

// const bookings = [
//   {
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
//     },
//     id: 1,
//     numberOfSeats: 2,
//     hourOfSeance: "17.30"
//   },
//   {
//     title: "American Animals",
//     releaseDate: "01.09.2018",
//     desc:
//       "Wracając od kolegi, Will zauważa coś przerażającego. Pobliskie laboratorium rządowe skrywa złowrogą tajemnicę. Ogólnie jest nie za wesoło," +
//       " ale wszystko kończy się dobrze i żyją długo i szczęśliwie.",
//     duration: 3200,
//     img: "https://i.imgur.com/3koreob.jpg",
//     rating: 3,
//     ratingDesc: false,
//     allowClear: false,
//     soldedOut: true,
//     alert: {
//       message: "Wyprzedane",
//       type: "error"
//     },
//     id: 2,
//     numberOfSeats: 1,
//     hourOfSeance: "20.00"
//   }
// ];

// bookingId: "5be6d4996722160016d99c2c"
// description: "Historia wielkiej i trudnej miłości dwojga ludzi, którzy nie potrafią być ze sobą i jednocześnie nie mogą bez siebie żyć. W tle wydarzenia zimnej wojny lat 50. w Polsce, Berlinie, Jugosławii i Paryżu."
// duration: 140
// image: "https://ssl-gfx.filmweb.pl/po/40/39/764039/7860650.3.jpg"
// releaseDate: "Thu Oct 18 2018 08:04:53 GMT+0000 (Coordinated Universal Time)"
// reservedSetas: 2
// reservedTime: "2018-11-09T21:05:00+00:00"
// title: "Zimna wojna"
// _id: "5bd41f92416a5a00166f23ef"

class BookingCardsList extends Component {
  state = {
    loading: false,
    deleting: false,
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
      console.log("pobrano rezerwacje");
    } catch (error) {
      this.setState({ loading: false });
      console.warn("nie udało się pobrac rezerwacji");
    }
  };

  onClickDeleteBooking = async (bookingId) => {
    this.setState({deleting: true})
    try{
      await axios.delete(`${api.url}/bookings/${bookingId}`)
      alert("rezerwacja została usunięta");
      this.setState({deleting: false})
      this.fetchBookings();
    }catch(error){
    this.setState({deleting: false})
    console.warn('usuwanie nie powiodło się')
    }
  }


  render() {
    const { bookings, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (isEmpty(bookings)) {
      return <AlertFetchFail />;
    }

    return (
      <div className={styles.container}>
        {bookings.map(booking => {
          return (
            <BookingCard
              {...booking}
              key={booking.bookingId}
              onClickDeleteBooking={() => this.onClickDeleteBooking(booking.bookingId)}
            />
          );
        })}
      </div>
    );
  }
}

export default BookingCardsList;
