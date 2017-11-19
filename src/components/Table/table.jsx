import React from 'react'
import './table.css'

export default function table ({totalSpace, spaceRemaining, internalFragmentation, externalFragmentation}) {
  const mbSpan = () => (<span className='mb table'>MB</span>)
  return (
    <div className='main table table'>
      <div className='table-main table'>
        <table className='process-table table'>
          <tr className='head table'>
            <td className='first table'>Total Space</td>
            <td>Space Remaining</td>
            <td>Internal Fragmentation</td>
            <td className='last table'>External Fragmentation</td>
          </tr>
          <tr className='content table'>
            <td>{totalSpace} <span className='mb table'>MB</span></td>
            <td>{spaceRemaining} <span className='mb table'>MB</span></td>
            <td>{(internalFragmentation !== undefined ? `${internalFragmentation}` : 'Nil')} {(internalFragmentation !== undefined ? mbSpan() : '')}</td>
            <td>{(externalFragmentation !== undefined ? `${externalFragmentation}` : 'Nil')} {(externalFragmentation !== undefined ? mbSpan() : '')}</td>
          </tr>

        </table>
        <hr />
      </div>
    </div>
  )
}
