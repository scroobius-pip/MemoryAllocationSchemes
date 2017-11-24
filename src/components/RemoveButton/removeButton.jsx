import React from 'react'
import './removeButton.css'

export default function removeButton ({onClick, name}) {
  console.log('name received from removebutton' + name)
  return (
    <button className='remove' name='process' onClick={onClick}><span>&times;</span></button>
  )
}
