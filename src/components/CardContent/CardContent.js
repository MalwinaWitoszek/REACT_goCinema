import React from "react";
import RunningTime from "../RunningTime/RunningTime";
import PropTypes from "prop-types";
import styles from "./CardContent.module.scss";

const CardContent = ({ img, title, releaseDate, desc, style, ...restProps }) => {
  return (
    <div className={styles.container} style={style}>
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

CardContent.defaultProps = {
  title: "Brak tytułu",
  releaseDate: "Nieznana" ,
  desc: "Brak opisu",
  style: {
    marginBottom: '0.65rem'
  }
};

CardContent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default CardContent;
