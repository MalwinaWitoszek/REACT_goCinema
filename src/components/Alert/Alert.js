import React from "react";
import PropTypes from "prop-types";
import styles from "./Alert.module.scss";

const iconType = {
  success: "check-circle",
  error: "exclamation-circle",
  warning: "exclamation-triangle",
  info: "info-circle"
};

const Alert = ({ message, type }) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <img
        src={require(`../../images/alert_icons/${iconType[type]}.svg`)}
        className={styles.icon}
        alt="ikonka powiadomienia"
      />
      <div className={styles.message}>{message}</div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;