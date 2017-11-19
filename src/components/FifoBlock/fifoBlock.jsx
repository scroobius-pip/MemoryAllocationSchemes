import React from 'react'
import './fifoBlock.css'

export default function fifoBlock ({pid, order, color}) {
  return (pid !== undefined ? (

    <div style={{backgroundColor: color}} className='process-block fb'>
      <p className='pid fb'>{pid}</p>
      <p className='order fb'>{order}</p>
    </div>
) : (
  <div className='empty process-block fb'>
    <p className='pid fb'>Empty</p>
    <p className='order fb'>{order}</p>
  </div>
))
}
