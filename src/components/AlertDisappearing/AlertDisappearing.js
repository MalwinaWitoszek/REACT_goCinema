import React from "react";
import Alert from "../Alert/Alert";
import PropTypes from "prop-types";
import styles from "./AlertDisappearing.module.scss";

const AlertDisappearing = ({ showAlertContainer, message, type }) => {
  let containerClass;
  showAlertContainer
    ? (containerClass = `${styles.container} ${styles.containerShow}`)
    : (containerClass = `${styles.container}`);

  return (
    <div className={containerClass}>
      <Alert
        alert={{
          message: `${message}`,
          type: `${type}`
        }}
        extraStyleContainer={styles.alertBookingContainer}
        extraStyleMessage={styles.alertBookingMessage}
      />
    </div>
  );
};

AlertDisappearing.propTypes = {
  showAlertContainer: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string
};

export default AlertDisappearing;
