import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

const PageNotFound = props => {
  return (
    <div className={styles.container}>
    <h2>Błąd 404 </h2>
     <h3>Strony nie odnaleziono</h3>
    <p>Przepraszamy, ale strona ktorej szukasz nie istnieje...</p>
    <p>Wróć do <NavLink to="/" className={styles.link}>strony głównej</NavLink></p>
    </div>
  )
}

PageNotFound.propTypes = {

}

export default PageNotFound
