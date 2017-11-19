import React, {Component} from 'react'
import './App.css'
import {FixedBlockContainer, VariableBlockContainer, FifoBlockContainer } from './containers/Blocks'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <FixedBlockContainer />
        <VariableBlockContainer />
        <FifoBlockContainer />
      </div>
    )
  }
}
