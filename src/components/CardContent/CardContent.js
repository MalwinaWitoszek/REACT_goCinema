import React from "react";
import RunningTime from '../RunningTime/RunningTime'
import PropTypes from "prop-types";
import styles from "./CardContent.module.scss";

const MovieDescription = props => {
  return (
    <div className={styles.container}>
      <div className={styles.posterContainer}>
        <img
          src="https://i.imgur.com/0oo7XJc.jpg"
          className={styles.filmPoster}
          alt="plakat filmowy"
        />
      </div>
      <div className={styles.infoContainer}>
        <header>
          <h3>title</h3>
          <p className={styles.releaseDate}>Premiera: czas></p>
        </header>
        <RunningTime />
        <p>opis</p>
      </div>
    </div>
  );
};

MovieDescription.propTypes = {};

export default MovieDescription;
