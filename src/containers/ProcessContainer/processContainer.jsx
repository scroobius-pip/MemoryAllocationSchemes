import React from 'react'
import './processContainer.css'
import RefreshButton from '../../components/RefreshButton'

export default function processContainer ({children, memoryInfo, refresh}) {
  return (
    <div className='main pc'>
      <div className='process-main pc'>
        <div className='process-container pc'>
          {children}
          <span className='memory-info pc'>
            {memoryInfo}
            <span className='mb pc'>MB</span>
          </span>
        </div>
        <RefreshButton onClick={refresh} />
      </div>
    </div>
  )
}
