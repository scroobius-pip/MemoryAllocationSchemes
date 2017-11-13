import React from 'react'
import './fixedBlock.css'

export default function fixedBlock ({pid, usedSize, fragmentSize, removeButton}) {
  const total = usedSize + fragmentSize
  const [usedFlex, fragmentFlex] = [usedSize / total, fragmentSize / total]
  return (pid !== undefined
        ? (
          <div class='process-block fixed'>
            <div class='process-used' style={{flex: usedFlex}}>
              <div class='info'>
                <p class='pid fixed'>{`Process #${pid}`}</p>
                <p class='size fixed'>{usedSize}<span class='mb'>MB</span>
                </p>
              </div>
              {removeButton}
            </div>
            <div class='process-fragment' style={{flex: fragmentFlex}}>
              <p class='size'>{fragmentSize}<span class='mb'>MB</span>
              </p>
            </div>
          </div>
        )
        : (
          <div class='empty fixed'>
            <p>Empty</p>
          </div>
        ))
}
