import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ soldedOut, text, onClickButton, extraStyle }) => {
  console.log('brr',extraStyle)
  return (
    <div className={styles.container}>
      {console.log('solded',soldedOut)}
      {        soldedOut ? (
        <span className={styles.inaccessible}>niedostępny</span>
      ) : (
        <button className={`${styles.button} ${extraStyle}`} onClick={onClickButton}>{text}</button>
      )}
    </div>
  );
};

Button.defaultProps = {
  soldedOut: false,
  text: "zatwierdź",
  extraStyle: null,
};

Button.propTypes = {
  soldedOut: PropTypes.bool,
  text: PropTypes.string.isRequired,
  extraStyle: PropTypes.string,
  onClickButton: PropTypes.func
};

export default Button;
