import React from 'react'
import './inputBlock.css'

export default function inputBlock ({description, children}) {
  return (
    <div className='input-block ib'>
      <span class='description ib'>{description}</span>
      {children}
    </div>

  )
}
