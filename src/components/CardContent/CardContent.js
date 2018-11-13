import React from "react";
import RunningTime from "../RunningTime/RunningTime";
import PropTypes from "prop-types";
import { formatDate } from '../../utils'
import styles from "./CardContent.module.scss";

const CardContent = ({ image, title, releaseDate, description, style, ...restProps }) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.posterContainer}>
        <img src={image} className={styles.filmPoster} alt="plakat filmowy" />
      </div>
      <div className={styles.infoContainer}>
        <header>
          <h3>{title}</h3>
          <p className={styles.releaseDate}>
            <span>Premiera: </span> {formatDate (releaseDate)} r.
          </p>
        </header>
        <RunningTime {...restProps} />
        <p>
          <span>Opis: </span>
          {description}
        </p>
      </div>
    </div>
  );
};

CardContent.defaultProps = {
  title: "Brak tytułu",
  releaseDate: "-" ,
  description: "Brak opisu",
  style: {
    marginBottom: '0.65rem'
  }
};

CardContent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.object,
};

export default CardContent;
