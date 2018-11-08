import React from "react";
import RatingStars from "../RatingStars/RatingStars";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./CardFooter.module.scss";

const CardFooter = ({toPath, buttonText,...restProps}) => {
  return (
    <div className={styles.container}>
      <RatingStars {...restProps} />
      <NavLink className={styles.link} to={toPath}>
        <Button {...restProps} text={buttonText} />
      </NavLink>
    </div>
  );
};

export default CardFooter;
