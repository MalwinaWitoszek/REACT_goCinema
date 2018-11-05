import React from "react";
import RunningTime from "../RunningTime/RunningTime";
import Button from '../Button/Button'
import PropTypes from "prop-types";
import styles from "./CardContent.module.scss";

const CardContent = ({ img, title, releaseDate, desc, ...restProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.posterContainer}>
        <img src={img} className={styles.filmPoster} alt="plakat filmowy" />
      </div>
      <div className={styles.infoContainer}>
        <header>
          <h3>{title}</h3>
          <p className={styles.releaseDate}>
            <span>Premiera: </span> {releaseDate} r.
          </p>
        </header>
        <RunningTime {...restProps} />
        <p>
          <span>Opis: </span>
          {desc}
        </p>
      </div>
    </div>
  );
};

CardContent.propTypes = {};

export default CardContent;
