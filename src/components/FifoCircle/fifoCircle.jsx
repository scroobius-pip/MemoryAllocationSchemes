import React from 'react'
import './fifoCircle.css'

export default function fifoCircle ({pid, color}) {
  return (
    <div style={{backgroundColor: color}} className=' fc process-circle'>{pid}</div>
  )
}
