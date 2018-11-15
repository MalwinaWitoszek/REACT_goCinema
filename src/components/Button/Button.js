import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ disabledButton, soldedOut, text, onClickButton, extraStyle, extraStyleContainer, navButton }) => {
  return (
    <div className={`${styles.container} ${extraStyleContainer}`}>
        {soldedOut ? (
        <span className={styles.inaccessible}>niedostępny</span>
      ) : navButton ? (
        navButton
      ) : (

        <button
          disabled = {disabledButton}
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
  extraStyleContainer: null,
  extraStyle: null,
};

Button.propTypes = {
  soldedOut: PropTypes.bool,
  text: PropTypes.string.isRequired,
  extraStyleContainer: PropTypes.string,
  extraStyle: PropTypes.string,
  onClickButton: PropTypes.func
};

export default Button;
