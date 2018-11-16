import React, { Component } from "react";
import Card from "../Card/Card";
import AlertFetchFail from "../AlertFetchFail/AlertFetchFail";
import Loader from "../Loader/Loader";
import axios from "axios";
import { isEmpty } from "lodash";
import { api } from "../../config";
import styles from "./CardsList.module.scss";


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
      const response = await axios.get(`${api.url}/movies`);
      this.setState({
        loading: false,
        movies: response.data
      });
    } catch (error) {
      this.setState({ loading: false});
      console.warn('pobranie danych nie powiodło się')
    }
  };

  render() {
    const { movies, loading, } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (isEmpty(movies)) {
      return  <AlertFetchFail />
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
