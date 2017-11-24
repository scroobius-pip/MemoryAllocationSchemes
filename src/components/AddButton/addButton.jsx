import React from 'react'
import './addButton.css'

export default function addButton ({onClick, disabled, name}) {
  return (
    <button name={name} disabled={disabled} onClick={onClick} className={'add ' + (disabled ? 'disabled' : '')}
    >&#10010;</button>
  )
}
