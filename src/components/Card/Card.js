import React from "react";
import Alert from "../Alert/Alert";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import { countDays } from "../../utils";
import styles from "./Card.module.scss";

const Card = props => {
  const CardContentStyle = {
    marginBottom: "0.4rem"
  };
  const { releaseDate } = props;

  return (
    <div className={styles.container}>
      {countDays(releaseDate) < 46 && <Alert {...props} />}
      <CardContent {...props} style={CardContentStyle} />
      <CardFooter
        {...props}
        toPath={`movie/${props["_id"]}`}
        buttonText="rezerwuj"
      />
    </div>
  );
};

export default Card;
