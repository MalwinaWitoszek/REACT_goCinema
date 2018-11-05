import React from "react";
import Alert from "../Alert/Alert";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";


const Card = ({rating, ratingDesc, allowClear, alert, ...restProps}) => {
  return (
    <div className={styles.container}>
      <Alert message={alert.message} type={alert.type}/>
      <CardContent {...restProps} />
      <CardFooter rating={rating} ratingDesc={ratingDesc}  />
    </div>
  );
};

Card.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingDesc: PropTypes.bool.isRequired,
  allowClear: PropTypes.bool.isRequired,
  alert: PropTypes.object.isRequired,
};

export default Card;
