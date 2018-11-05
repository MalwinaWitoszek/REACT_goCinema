import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RatingStars.module.scss";

const ratingDescription = {
  null: "Zagłosuj!",
  0: "Zagłosuj!",
  1: "Totalna porażka",
  2: "Dno",
  3: "Ujdzie",
  4: "Taki sobie",
  5: "Zjadliwy",
  6: "Przyzwoity",
  7: "Dobry",
  8: "bardzo dobry",
  9: "Wyśmienity",
  10: "Arcydzieło!"
};

class RatingStars extends Component {
  state = {
    rating: this.props.rating * 2,
    tempRating: null
  };

  render() {
    const { ratingDesc } = this.props;
    const stars = [];
    for (let star = 1; star <= 10; star++) {
      let starClass;
      // give all selected and unselected stars the appropriate class
      star <= this.state.rating
        ? (starClass = `${styles.star} ${styles.selected}`)
        : (starClass = `${styles.star}`);

      stars.push(
        <span
          key={star}
          style={{
            // showing the right part of the star, changing every second star
            direction: star % 2 ? "ltr" : "rtl"
          }}
          className={starClass}
        >
          &#10032;
        </span>
      );
    }

    return (
      <div className={styles.container}>
      <span>Weź udział w rankingu:</span>
        <div className={styles.starsContainer}> {stars}</div>
        {/*displaying rating description depending on prop ratingDesc(true or false) */}
        { ratingDesc && <div className={styles.ratingDescription}>( { ratingDescription[this.state.rating] } )</div>  }
      </div>
    );
  }
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingDesc: PropTypes.bool.isRequired,
  allowClear: PropTypes.bool.isRequired
};

export default RatingStars;
