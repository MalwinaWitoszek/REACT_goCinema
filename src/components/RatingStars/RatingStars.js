import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RatingStars.module.scss";

export const ratingDescription = {
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

  // voting after clicking
  onClickHandler = ratingStar => {
    const { allowClear } = this.props;
    allowClear && this.state.temp === ratingStar
      ? this.setState({
          rating: 0,
          temp:null
        })
      : this.setState({
          rating: ratingStar,
          temp: ratingStar
        });
  };

  // proposition of voting after mouseover event
  onMouseOverHandler = ratingPropose => {
    this.setState(prevState => {
      return {
        temp: prevState.rating,
        rating: ratingPropose
      };
    });
  };

    // return to the state before 'hover'
  onMouseOutHandler = () => {
    this.setState( {
        rating: this.state.temp,
        temp: null
    });
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
          onClick={() => this.onClickHandler(star)}
          onMouseOver={() => this.onMouseOverHandler(star)}
          onMouseOut={this.onMouseOutHandler}
          data-test="star"
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
        {ratingDesc && (
          <div className={styles.ratingDescription} data-test="description">
             {ratingDescription[this.state.rating]}
          </div>
        )}
      </div>
    );
  }
}

RatingStars.defaultProps ={
  rating: null,
  ratingDesc: true,
  allowClear: false,
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  ratingDesc: PropTypes.bool,
  allowClear: PropTypes.bool,
};

export default RatingStars;
