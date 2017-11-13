import React from 'react'
import './inputBlock.css'

export default function inputBlock ({description, children}) {
  return (
    <div className='input-block'>
      <span class='description'>{description}</span>
      {children}
    </div>

  )
}
