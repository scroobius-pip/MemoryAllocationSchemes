import React from 'react'
import './textBlock.css'

export default function textBlock ({small, value, onChange, placeholder, name}) {
  return (small === undefined
    ? (
      <div className='text-wrap tb'>
        <input name={name} onChange={onChange} value={value} className='round-process tb' type='number' />
        <div className='vertical-line tb'>
          <span class='mb tb'>MB</span>
        </div>
      </div>
    )
    : (

      <div class='text-wrap tb'>
        <input name={name} onChange={onChange} placeholder={placeholder} value={value} class='small round-process tb' type='number' />
      </div>
    ))
}
