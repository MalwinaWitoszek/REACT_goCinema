import React, { Component } from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import BookingForm from "../BookingForm/BookingForm";
import PropTypes from "prop-types";
import styles from "./BookingCardDetails.module.scss";

class BookingCardDetails extends Component {
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
    hourOfSeance: null,
    activeSeanceId: null
  };

 onClickHourPanel = (seanceId, hourOfSeance) => {
    return(
      this.setState({
        activeSeanceId: seanceId,
        hourOfSeance: hourOfSeance
      })
    )
  }

  render() {
    const { film, ...rest } = this.state;
    return (
      <div className={styles.container}>
        <CardContent {...film}/>
        <BookingForm {...rest} onClickHourPanel={this.onClickHourPanel}/>
        Link powrotu
      </div>
    );
  }
}

BookingCardDetails.propTypes = {};

export default BookingCardDetails;
