import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ soldedOut, text, onClickButton, extraStyle, navButton }) => {
  return (
    <div className={styles.container}>
        {soldedOut ? (
        <span className={styles.inaccessible}>niedostępny</span>
      ) : navButton ? (
        navButton
      ) : (
        <button
          className={`${styles.button} ${extraStyle}`}
          onClick={onClickButton}
        >
          {text}
        </button>
      )}
    </div>
  );
};

Button.defaultProps = {
  soldedOut: false,
  text: "zatwierdź",
  extraStyle: null
};

Button.propTypes = {
  soldedOut: PropTypes.bool,
  text: PropTypes.string.isRequired,
  extraStyle: PropTypes.string,
  onClickButton: PropTypes.func
};

export default Button;
