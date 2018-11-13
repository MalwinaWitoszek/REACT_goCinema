import React, { Component } from "react";
import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";
import axios from "axios";
import { isEmpty } from "lodash";
import { api } from "../../config";
import styles from "./CardsList.module.scss";

// const data = [
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
//     id: 1
//   },
//   {
//     title: "Mission: Impossible - Fallout",
//     desc:
//       "Konsekwencje zakończonej niepowodzeniem misji IMF może odczuć cały świat. Aby zapobiec katastrofie, Ethan Hunt i jego zespół muszą stanąć do wyścigu z czasem.",
//     duration: 8820,
//     releaseDate: "09.09.2018",
//     img: "https://i.imgur.com/rOXaXH6.jpg",
//     rating: 5,
//     ratingDesc: true,
//     allowClear: true,
//     soldedOut: false,
//     alert: {
//       message: "Ostatnie miejsca",
//       type: "warning"
//     },
//     id: 2
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
//     id: 3
//   }
// ];

class CardsList extends Component {
  state = {
    loading: false,
    movies: []
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({ loading: true });
    try {
      const response = await axios.get(`${api.url}/movie`);
      this.setState({
        loading: false,
        movies: response.data
      });
    } catch (error) {
      this.setState({ loading: false});
    }
  };

  render() {
    console.log(this.state.movies);
    const { movies, loading, isError } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (isEmpty(movies)) {
      return (
        <Alert
          alert={{
            message: "nie udało się pobrać danych...",
            type: "error"
          }}
          extraStyleContainer={styles.alertBookingContainer}
          extraStyleMessage={styles.alertBookingMessage}
        />
      );
    }



    return (
      <div className={styles.container}>
        {movies.map(movie => (
          <Card {...movie} key={movie["_id"]} />
        ))}
      </div>
    );
  }
}

export default CardsList;
