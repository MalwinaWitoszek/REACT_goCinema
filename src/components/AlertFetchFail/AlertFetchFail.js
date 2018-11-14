import React from "react";
import Alert from "../Alert/Alert";
import styles from "./AlertFetchFail.module.scss";

const AlertFetchFail = () => {
  return (
    <React.Fragment>
      <Alert
        alert={{
          message: "nie udało się pobrać danych...",
          type: "error"
        }}
        extraStyleContainer={styles.container}
        extraStyleMessage={styles.message}
      />
    </React.Fragment>
  );
};


export default AlertFetchFail;
