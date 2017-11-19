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
  constructor (props) {
    super(props)
    this.state = {
      Processes: [{size: 100, fragment: 50, pid: '1'}, {size: 20, fragment: 130, pid: '2'}],
      MemoryInfo: 0,
      internalFragmentation: 0,
      InputDivisions: 0,
      InputMemory: 0,
      InputAddProcess: 0,
      InputPid: '',
      MemoryInitialized: false
    }
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleRefreshClicked () {
    alert('refreshed was clicked')
  }

  FixedMem (action, payload) {
    var fixed = null
    switch (action) {
      case 'init':
        fixed = new Fixed(payload)
        break
      case  'create'
        if(fixed!==null) fixed.a
    }
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
            <AddButton disabled={this.state.MemoryInitialized} />
          </InputBlock>
          <InputBlock description='Add Process'>
            <TextBlock name='InputAddProcess' value={this.state.InputAddProcess} onChange={this.handleInputChange.bind(this)} />
            <TextBlock small placeholder='Pid' name='InputPid' value={this.state.InputPid} onChange={this.handleInputChange.bind(this)} />

            <AddButton disabled={!this.state.MemoryInitialized} />
          </InputBlock>
        </Form>

        {this.state.Processes.length > 0 ? (
          <div>
            <ProcessContainer
              memoryInfo={this.state.MemoryInfo}
              refresh={this.handleRefreshClicked.bind(this)}>

              {this.state.Processes.map(process => {
                return (
              process !== null ? <FixedBlock key={process.pid} pid={process.pid} fragmentSize={process.fragment} usedSize={process.size} /> : <FixedBlock />
                )
              })}
            </ProcessContainer>

            <LegendContainer>
              <Legend color='black' description='Used Partition' />
              <Legend color='red' description='Internal Fragment' />
              <Legend color='orange' description='External Fragment' />
              <Legend color='white' description='Empty Partition' />
            </LegendContainer>
            <Table totalSpace={1000} spaceRemaining={700} internalFragmentation={150} />

          </div>
      ) : null
        }

      </div>
    )
  }
}
