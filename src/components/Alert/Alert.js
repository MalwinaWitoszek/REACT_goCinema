import React from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.scss";

const iconType = {
  success: "check-circle",
  error: "exclamation-circle",
  warning: "exclamation-triangle",
  info: "info-circle"
};

const Alert = ({ alert: { message, type }, extraStyleContainer, extraStyleMessage }) => {
  return (
    <div className={`${styles.container} ${styles[type]} ${extraStyleContainer}`}>
      <img
        src={require(`../../images/alert_icons/${iconType[type]}.svg`)}
        className={styles.icon}
        alt="ikonka powiadomienia"
      />
      <div className={`${styles.message} ${extraStyleMessage}`}>{message}</div>
    </div>
  );
};

Alert.defaultProps = {
  alert: {
    message: "Nowość!",
    type: "success"
  },
  extraStyleContainer: null,
  extraStyleMessage: null,
};

Alert.propTypes = {
  alert: PropTypes.objectOf(PropTypes.string).isRequired,
  extraStyleContainer: PropTypes.string,
  extraStyleMessage: PropTypes.string,
};

export default Alert;
