import React from 'react'
import './radioBlock.css'

export default function radioBlock ({id, name, text}) {
  return (
    <div className='radio-container'>
      <input type='radio' name={name} id={id} />
      <label for={id}>{text}</label>
    </div>
  )
}
