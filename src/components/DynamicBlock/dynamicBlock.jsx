import React, {Component} from 'react'
import RemoveButton from '../RemoveButton'
import './dynamicBlock.css'

export default class dynamicBlock extends Component {
  render () {
    const {pid, size, total, onRemoveClicked} = this.props
    const flexSize = size / total
    return (
    pid !== undefined && pid !== null ? (<div className='process-block dynamic' style={{flex: flexSize}}>
      <div className='info dynamic'>
        <p className='pid dynamic'>{`Process #${pid}`}</p>
        <p className='size dynamic'>{size}<span className='dynamic mb'>MB</span></p>
      </div>
      <RemoveButton onClick={onRemoveClicked} />
    </div>
  ) : (
    <div className='fragment-block dynamic' style={{flex: flexSize}}>
      <div className='info dynamic'>
        <p style={{color: 'FF9F1C'}} className='size dynamic'>{size}<span className='dynamic mb'>MB</span></p>
      </div>
    </div>
  ))
  }
}
