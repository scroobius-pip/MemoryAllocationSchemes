import React from 'react'
import refreshImage from './refresh.svg'
import './refreshButton.css'
export default function refreshButton ({onClick}) {
  return (
    <div onClick={onClick} className='refresh'>
      <img src={refreshImage} alt='' />
    </div>
  )
}
