import React, { Component } from "react";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";

class Card extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CardContent />
        <CardFooter />
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
