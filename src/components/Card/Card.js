import React from "react";
import Alert from "../Alert/Alert";
import CardContent from "../CardContent/CardContent";
import CardFooter from "../CardFooter/CardFooter";
import styles from "./Card.module.scss";


const Card = props => {
  const CardContentStyle = {
    marginBottom: '0.4rem',
  };

  return (
    <div className={styles.container}>
      <Alert {...props}/>
      <CardContent {...props} style={CardContentStyle} />
      <CardFooter {...props}  />
    </div>
  );
};

export default Card;
