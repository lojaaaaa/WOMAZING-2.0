import React from 'react'
import styles from './Button.module.css'

function Button({text, color, onAllDelete}) {
  return (
    <button onClick={onAllDelete} className={`button ${color}`} >{text}</button>
  )
}

export default Button