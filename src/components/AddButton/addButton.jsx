import React from 'react'
import './addButton.css'

export default function addButton ({onClick, disabled}) {
  return (
    <button disabled={disabled} onClick={onClick} className={'add ' + (disabled ? 'disabled' : '')}
    >&#10010;</button>
  )
}
