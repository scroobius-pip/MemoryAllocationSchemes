import React from 'react'
import './processContainer.css'
export default function processContainer ({children, memoryInfo, refresh}) {
  return (
    <div className='main'>
      <div className='process-main'>
        <div className='process-container'>
          {children}
          <span className='memory-info'>
            {memoryInfo}
            <span className='mb'>MB</span>
          </span>
        </div>
        {refresh}
      </div>
    </div>
  )
}
