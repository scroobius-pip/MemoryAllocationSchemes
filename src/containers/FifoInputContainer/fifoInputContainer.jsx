import React, {Component} from 'react'
import './fifoInputContainer.css'
import RefreshButton from '../../components/RefreshButton'
import FifoCircle from '../../components/FifoCircle'
import FifoInput from '../../components/FifoInput'

export default class fifoInputContainer extends Component {
  constructor (props) {
    super(props)
  }
  refreshClicked () {
    alert('Refresh clicked')
  }

  fifoOnKeyPress () {
    alert('Fifo input enter pressed')
  }

  render () {
    return (
      <div className='main fifo-input'>
        <div className='process-main fifo-input'>
          <div className='process-container fifo-input'>
            <FifoCircle pid={1} color={'red'} />
            <FifoCircle pid={2} color={'green'} />
            <FifoCircle pid={3} color={'orange'} />
            <FifoInput onkeypress={this.fifoOnKeyPress} />
          </div>
          <RefreshButton onClick={this.refreshClicked} />
        </div>
      </div>
    )
  }
}
