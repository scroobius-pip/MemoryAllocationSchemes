import React from 'react'
import './fifoInput.css'

export default function fifoInput ({onkeypress}) {
  function handleKeyPress (e) {
    if (e.charCode === 13) {
      onkeypress()
    }
  }
  return (<input onKeyPress={handleKeyPress} className='round-process fifo-in' maxLength='2' type='text' />)
}
