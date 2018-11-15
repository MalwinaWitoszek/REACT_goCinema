import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  disabledButton,
  availableSetas,
  text,
  onClickButton,
  extraStyle,
  extraStyleContainer,
  navButton
}) => {
  return (
    <div className={`${styles.container} ${extraStyleContainer}`}>
      {availableSetas === 0 ? (
        <span className={styles.inaccessible}>niedostępny</span>
      ) : navButton ? (
        navButton
      ) : (
        <button
          disabled={disabledButton}
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
  availableSetas: 100,
  text: "zatwierdź",
  extraStyleContainer: null,
  extraStyle: null
};

Button.propTypes = {
  availableSetas: PropTypes.number,
  text: PropTypes.string,
  extraStyleContainer: PropTypes.string,
  extraStyle: PropTypes.string,
  onClickButton: PropTypes.func
};

export default Button;
