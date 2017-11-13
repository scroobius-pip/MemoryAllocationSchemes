import React from 'react'
import './dynamicBlock.css'

export default function dynamicBlock ({pid, size, flex, removeButton}) {
  return (
    pid !== undefined ? (<div className='process-block dynamic' style={{flex: flex}}>
      <div className='info'>
        <p className='pid'>{`Process #${pid}`}</p>
        <p className='size'>{size}<span className='mb'>MB</span></p>
      </div>
      {removeButton}
    </div>
  ) : (
    <div className='fragment-block' style={{flex: flex}}>
      <div className='info'>
        <p className='size'>{size}<span className='mb'>MB</span></p>
      </div>
    </div>
  ))
}
