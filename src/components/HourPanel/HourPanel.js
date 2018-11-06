import React from 'react'
import PropTypes from 'prop-types'
import styles from './HourPanel.module.scss'

const HourPanel = ({hour, activeClass, onClick}) => {
  return (
    <div
    className={styles.container}
    onClick={onClick}
    >
    <span>{hour}</span>
    </div>
  )
}

HourPanel.propTypes = {

}

export default HourPanel
