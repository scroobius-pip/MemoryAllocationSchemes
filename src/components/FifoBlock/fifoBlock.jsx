import React from 'react'
import './fifoBlock.css'

export default function fifoBlock ({pid, order, color}) {
  return (pid !== undefined ? (

    <div style={{backgroundColor: color}} className='process-block'>
      <p className='pid'>{pid}</p>
      <p className='order'>{order}</p>
    </div>
) : (
  <div className='empty process-block'>
    <p className='pid'>Empty</p>
    <p className='order'>{order}</p>
  </div>
))
}
