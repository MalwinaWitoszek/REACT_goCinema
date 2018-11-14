import React from 'react';
import LoadingSpinner from 'react-loader-spinner'
import styles from './Loader.module.scss';

const Loader = () => (
    <div className={styles.loader}>
    <p>wczytuję..</p>
        <LoadingSpinner
            type="ThreeDots"
            color="#07aaaa"
            height="40"
            width="40"
        />
    </div>
);

export default Loader;
