import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.container}>
        <NavLink to="/movies" className={styles.link} activeClassName="active"> <span>
        &#127902;</span>  lista filmow</NavLink>
        <NavLink to="/bookings/1" className={styles.link} activeClassName="active"><span>&#9745;</span> lista rezerwacji</NavLink>
        <NavLink to="/redirect" className={styles.link}  activeClassName="active"><span>&#9719;</span> wkrotce</NavLink>

    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
