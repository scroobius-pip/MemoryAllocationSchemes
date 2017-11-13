import React, {Component} from 'react'
import './fifoOutputContainer.css'
import FifoBlock from '../../components/FifoBlock'
export default class fifoOutputContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {pageFaults: 0}
  }

  render () {
    const {pageFaults} = this.state
    return (
      <div className='main fifo-output'>
        <div className='fifo-wrap'>
          <div className='fifo-bar'>
            <FifoBlock pid={1} order={1} color={'red'} />
            <FifoBlock pid={12} order={2} color={'green'} />
            <FifoBlock pid={20} order={3} color={'orange'} />
          </div>
          <div className='page-faults'>
            <p>Page Faults</p>
            <span>{pageFaults}</span>
          </div>
        </div>
      </div>
    )
  }
}
