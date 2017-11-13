import React from 'react'
import './table.css'

export default function table ({totalSpace, spaceRemaining, internalFragmentation, externalFragmentation}) {
  return (
    <div className='main table'>
      <div className='table-main'>
        <table className='process-table'>
          <tr className='head'>
            <td className='first'>Total Space</td>
            <td>Space Remaining</td>
            <td>Internal Fragmentation</td>
            <td className='last'>External Fragmentation</td>
          </tr>
          <tr className='content table'>
            <td>{totalSpace} <span className='mb table'>MB</span></td>
            <td>{spaceRemaining} <span className='mb table'>MB</span></td>
            <td>{(internalFragmentation !== undefined ? `${internalFragmentation} ${<span className='mb table'>MB</span>}` : 'Nil')}</td>
            <td>{(externalFragmentation !== undefined ? <div>{externalFragmentation}<span className='mb table'>MB</span></div> : 'Nil')}</td>
          </tr>

        </table>
        <hr />
      </div>
    </div>
  )
}
