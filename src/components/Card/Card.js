import React from "react";
import Alert from "../Alert/Alert";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";


const Card = ({alert, ...restProps}) => {
  return (
    <div className={styles.container}>
      <Alert message={alert.message} type={alert.type}/>
      <CardContent {...restProps} />
      <CardFooter {...restProps}  />
    </div>
  );
};

Card.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default Card;
