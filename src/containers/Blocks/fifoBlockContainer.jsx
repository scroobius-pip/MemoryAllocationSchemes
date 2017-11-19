import React, {Component} from 'react'
import './block.css'
import {AddButton, TextBlock, InputBlock, RoundButton, FifoCircle} from '../../components'
import Form from '../Form'
import FifoInputContainer from '../FifoInputContainer'
import FifoOutputContainer from '../FifoOutputContainer'
import Fifo from '../../data_structures/Fifo'

export default class fifoBlock extends Component {
  render () {
    return (
      <div className='block'>
        <h1>Fifo Page Replacement</h1>
        <Form>
          <InputBlock description='No Of Pages'>
            <TextBlock small />
            <AddButton />
          </InputBlock>
          <InputBlock description='Total Working Set'>
            <TextBlock small />
            <AddButton />
          </InputBlock>
          <RoundButton text='Start' />
        </Form>
        <FifoInputContainer
          refreshClicked={() => {
            alert('df')
          }}
          onInputPressed={() => {
            alert('dd')
          }} />
        <FifoOutputContainer />
      </div>
    )
  }
}
