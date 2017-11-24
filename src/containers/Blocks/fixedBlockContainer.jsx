import React, {Component} from 'react'
import './block.css'
import {
  AddButton,
  Table,
  FixedBlock,
  InputBlock,
  Legend,
  RemoveButton,
  RefreshButton,
  TextBlock
} from '../../components'
import ProcessContainer from '../ProcessContainer'
import LegendContainer from '../LegendContainer'
import Form from '../Form'
import Fixed from '../../data_structures/fixedMemAlloc'

export default class fixedBlock extends Component {
  constructor () {
    super()
    this.state = {
      MemoryInfo: 0,
      InputDivisions: 0,
      InputMemory: 0,
      InputProcessSize: 0,
      InputPid: '',
      MemoryInitialized: false,
      totalMem: 0,
      divisions: 0,
      spaceRemaining: 0,
      internalFragmentation: 0,
      processes: []

    }

    this.FixedMem = new Fixed()
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRefreshClicked () {
    this.clearInput()
    this.clearState()
    this.toggleMemoryInitialized()
  }

  updateMemState () {
    console.log(this.FixedMem.processes)
    this.setState({
      'divisions': this.FixedMem.divisions,
      'totalMem': this.FixedMem.totalMem,
      'spaceRemaining': this.FixedMem.spaceRemaining,
      'internalFragmentation': this.FixedMem.internalFragmentation,
      'processes': this.FixedMem.processes,
      'MemoryInfo': this.FixedMem.spaceRemaining

    })
  }

  clearInput () {
    this.setState({
      'InputPid': '',
      'InputProcessSize': '',
      'InputDivisions': 0,
      'InputMemory': 0
    })
  }

  clearState () {
    this.setState(
      {
        totalMem: 0,
        divisions: 0,
        spaceRemaining: 0,
        internalFragmentation: 0,
        processes: [],
        MemoryInfo: ''
      }
    )
  }

  handleButtonPressed (e) {
    const {InputDivisions, InputMemory, InputPid, InputProcessSize} = this.state
    console.log(e.target.name)
    switch (e.target.name) {
      case 'initMem':
        this.FixedMem.initMem(InputMemory, InputDivisions)
        this.toggleMemoryInitialized()
        break
      case 'addProcess':
        this.FixedMem.createProcess(InputPid, InputProcessSize)
        break
      case 'process':
        this.FixedMem.removeProcess('1')
        break
      default:
        console.log(e.target.name)
    }
    this.updateMemState()
    this.clearInput()
  }
  toggleMemoryInitialized () {
    this.setState({'MemoryInitialized': !this.state.MemoryInitialized})
  }

  render () {
    return (
      <div className='block'>
        <h1>Fixed Memory Allocation Scheme</h1>
        <Form>
          <InputBlock description='Total Memory'>
            <TextBlock name='InputMemory' value={this.state.InputMemory} onChange={this.handleInputChange.bind(this)} />
          </InputBlock>
          <InputBlock description='No Of Divisions'>
            <TextBlock name='InputDivisions' value={this.state.InputDivisions} onChange={this.handleInputChange.bind(this)} small />
            <AddButton name='initMem' onClick={
              this.handleButtonPressed.bind(this)

          } disabled={this.state.MemoryInitialized} />
          </InputBlock>
          <InputBlock description='Add Process'>
            <TextBlock name='InputProcessSize' value={this.state.InputProcessSize} onChange={this.handleInputChange.bind(this)} />
            <TextBlock small placeholder='Pid' name='InputPid' value={this.state.InputPid} onChange={this.handleInputChange.bind(this)} />

            <AddButton name='addProcess' onClick={
              this.handleButtonPressed.bind(this)
            } disabled={!this.state.MemoryInitialized} />
          </InputBlock>
        </Form>

        {this.state.processes.length > 0 ? (
          <div>
            <ProcessContainer
              memoryInfo={this.state.totalMem}
              refresh={this.handleRefreshClicked.bind(this)}>

              {this.state.processes.map(process => {
                return (
              process !== null ? <FixedBlock name='name' onRemoveClicked={this.handleButtonPressed.bind(this, process.pid)} key={process.pid} pid={process.pid} fragmentSize={process.fragment} usedSize={process.size} /> : <FixedBlock />
                )
              })}
            </ProcessContainer>

            <LegendContainer>
              <Legend color='black' description='Used Partition' />
              <Legend color='red' description='Internal Fragment' />
              <Legend color='orange' description='External Fragment' />
              <Legend color='white' description='Empty Partition' />
            </LegendContainer>
            <Table totalSpace={this.state.totalMem} spaceRemaining={this.state.spaceRemaining} internalFragmentation={this.state.internalFragmentation} />

          </div>
      ) : null
        }

      </div>
    )
  }
}
