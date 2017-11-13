import React from 'react'
import './legend.css'

export default function legend ({color, description}) {
  return (
    <div className='legend'>
      <div style={{backgroundColor: color}} className='color legend' />
      <div className='description legend'>{description}</div>
    </div>
  )
}
