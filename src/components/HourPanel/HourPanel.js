import React from 'react'
import PropTypes from 'prop-types'
import styles from './HourPanel.module.scss'

const HourPanel = ({hour, activeClass, onClick}) => {
  return (
    <div
    className={`${styles.container} ${activeClass}`}
    onClick={onClick}
    >
    <span>{hour}</span>
    </div>
  )
}

HourPanel.propTypes = {
  hour: PropTypes.string.isRequired,
  activeClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func
}

export default HourPanel
