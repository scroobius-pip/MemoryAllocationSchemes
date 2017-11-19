import React from 'react'
import './legendContainer.css'

export default function legendContainer ({children}) {
  return (
    <div className='main legend'>
      <div className='legend-container'>
        {children}
      </div>
    </div>
  )
}
