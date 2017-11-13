import React from 'react'
import './removeButton.css'

export default function removeButton ({onClick}) {
  return (
    <button className='remove' onClick={onClick}><span>&times;</span></button>
  )
}
