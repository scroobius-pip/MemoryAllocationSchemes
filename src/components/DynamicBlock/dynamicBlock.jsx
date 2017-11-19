import React from 'react'
import RemoveButton from '../RemoveButton'
import './dynamicBlock.css'

export default function dynamicBlock ({pid, size, flex, onRemoveClicked}) {
  return (
    pid !== undefined ? (<div className='process-block dynamic' style={{flex: flex}}>
      <div className='info dynamic'>
        <p className='pid dynamic'>{`Process #${pid}`}</p>
        <p className='size dynamic'>{size}<span className='dynamic mb'>MB</span></p>
      </div>
      <RemoveButton onClick={onRemoveClicked} />
    </div>
  ) : (
    <div className='fragment-block dynamic' style={{flex: flex}}>
      <div className='info dynamic'>
        <p style={{color: 'FF9F1C'}} className='size dynamic'>{size}<span className='dynamic mb'>MB</span></p>
      </div>
    </div>
  ))
}
