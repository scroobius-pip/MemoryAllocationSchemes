import React, {Component} from 'react'
import RemoveButton from '../RemoveButton'
import './fixedBlock.css'

export default class fixedBlock extends Component {
  render () {
    const {pid, usedSize, fragmentSize, onRemoveClicked, name} = this.props
    const total = usedSize + fragmentSize
    const [usedFlex, fragmentFlex] = [usedSize / total, fragmentSize / total]
    console.log('recevied from fixedBlock ' + name)
    return (pid !== undefined
        ? (
          <div class='process-block fixed'>
            <div class='process-used fixed' style={{flex: usedFlex}}>
              <div class='info fixed'>
                <p class='pid fixed'>{`Process #${pid}`}</p>
                <p class='size fixed'>{usedSize}<span class='mb fixed'>MB</span>
                </p>
              </div>
              <RemoveButton name={name} onClick={onRemoveClicked} />
            </div>
            <div class='process-fragment fixed' style={{flex: fragmentFlex, display: (fragmentFlex === 0 ? 'none' : '') }}>
              <p class='size fixed'>{fragmentSize}<span class='mb fixed'>MB</span>
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
}
