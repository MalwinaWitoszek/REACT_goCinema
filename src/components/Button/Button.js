import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ soldetOut, text, onClick }) => {
  return (
    <div className={styles.container}>
      {soldetOut ? (
        <span className={styles.inaccessible}>niedostępny</span>
      ) : (
        <button className={styles.button} onClick={onClick}>{text}</button>
      )}
    </div>
  );
};

Button.defaultProps = {
  soldedOut: false,
  text: "Rezerwuj",
};

Button.propTypes = {
  soldedOut: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
