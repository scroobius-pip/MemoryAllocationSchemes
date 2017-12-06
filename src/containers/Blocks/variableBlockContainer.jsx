import React, {Component} from 'react'
import './block.css'
import {AddButton, Table, DynamicBlock, InputBlock, Legend, RemoveButton, RefreshButton, TextBlock, RadioBlock} from '../../components'
import ProcessContainer from '../ProcessContainer'
import LegendContainer from '../LegendContainer'
import Form from '../Form'
import Variable from '../../data_structures/variableMemAlloc'

export default class variableBlock extends Component {
  constructor () {
    super()
    this.state = {
      MemoryInfo: 0,
      InputPid: '',
      InputMemory: 0,
      InputProcessSize: 0,
      InputMethodType: '',
      MemoryInitialized: false,
      totalMem: 0,
      spaceRemaining: 0,
      externalFragmentation: 0,
      processes: []

    }
    this.VariableMem = new Variable()
  }

  handleRefreshClicked () {
    this.clearInput()
    this.clearState()
    this.toggleMemoryInitialized()
  }

  toggleMemoryInitialized () {
    this.setState({'MemoryInitialized': !this.state.MemoryInitialized})
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateMemState () {
    this.setState({
      'processes': this.VariableMem.processes,
      'spaceRemaining': this.VariableMem.spaceRemaining,
      'MemoryInfo': this.VariableMem.spaceRemaining,
      'totalMem': this.VariableMem.totalMem,
      'externalFragmentation': this.VariableMem.externalFragmentation
    })
  }

  clearInput () {

  }
  clearState () {
    this.setState({
      'processes': [],
      'MemoryInfo': 0,
      'totalMem': 0,
      'externalFragmentation': 0
    })
  }
  handleButtonPressed (e) {
    const {InputMethodType, InputMemory, InputPid, InputProcessSize} = this.state
    console.log(e)
    switch (e.target.name) {
      case 'initMem':
        this.VariableMem.initMem(InputMemory, 'firstfit')
        this.toggleMemoryInitialized()
        break
      case 'addProcess':
        this.VariableMem.createProcess(InputPid, InputProcessSize)
        break
      case 'process':
        this.VariableMem.removeProcess(e.pid)
        break
      default:
        console.log(e.target.name)
    }
    this.updateMemState()
    this.clearInput()
  }

  refresh (onClick) {
    return (<RefreshButton onClick={onClick} />)
  }

  render () {
    return (
      <div className='block'>
        <h1>Dynamic Memory Allocation</h1>
        <Form>
          { !this.state.MemoryInitialized ? (<div><InputBlock description='Allocation Strategy'>
            <RadioBlock id='ff' name='rad' text='First Fit' />
            <RadioBlock id='bf' name='rad' text='Best Fit' />
            <RadioBlock id='wf' name='rad' text='Worst Fit' />
          </InputBlock>
            <InputBlock description='Total Memory'>
              <TextBlock name='InputMemory' value={this.state.InputMemory} onChange={this.handleInputChange.bind(this)} />
              <AddButton name='initMem' onClick={
                this.handleButtonPressed.bind(this)
              } />
            </InputBlock>
          </div>
    )
      : (<InputBlock description='Add Process'>
        <TextBlock name='InputPid' value={this.state.InputPid} onChange={this.handleInputChange.bind(this)} placeholder='pid' small />
        <TextBlock name='InputProcessSize' value={this.state.InputProcessSize} onChange={this.handleInputChange.bind(this)} />
        <AddButton name='addProcess'
          onClick={this.handleButtonPressed.bind(this)}
        />
      </InputBlock>
  )
    }
        </Form>
        { this.state.processes.length > 0 ? (
          <div>
            <ProcessContainer
              memoryInfo={this.state.totalMem}
              refresh={this.handleRefreshClicked.bind(this)}>

              {
                this.state.processes.map(process => {
                  return (
                    <DynamicBlock onRemoveClicked={this.handleButtonPressed.bind(this, {pid: process.pid, target: {name: 'process'}})} key={process.pid || 'fragment'} pid={process.pid} size={process.size} total={this.state.totalMem} />
                  )
                })
               }
            </ProcessContainer>
            <LegendContainer>
              <Legend color='black' description='Used Partition' />
              <Legend color='red' description='Internal Fragment' />
              <Legend color='orange' description='External Fragment' />
              <Legend color='white' description='Empty Partition' />
            </LegendContainer>
            <Table totalSpace={1000} spaceRemaining={700} externalFragmentation={150} />
          </div>
  ) : null
}
      </div>

    )
  }
}
