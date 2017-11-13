import React from 'react'
import './roundButton.css'

export default function roundButton ({text, onClick}) {
  return (
    <div className='main round-button'>
      <button onClick={onClick} className='start round-button'>{text}</button>
    </div>
  )
}
