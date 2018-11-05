import React from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";


const Card = ({rating, ratingDesc, ...restProps}) => {
  return (
    <div className={styles.container}>
      <CardContent {...restProps} />
      <CardFooter rating={rating} ratingDesc={ratingDesc}  />
    </div>
  );
};

Card.propTypes = {};

export default Card;
