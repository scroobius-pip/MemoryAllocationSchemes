import React, {Component} from 'react'
import './block.css'
import {AddButton, Table, DynamicBlock, InputBlock, Legend, RemoveButton, RefreshButton, TextBlock, RadioBlock} from '../../components'
import ProcessContainer from '../ProcessContainer'
import LegendContainer from '../LegendContainer'
import Form from '../Form'
import Variable from '../../data_structures/variableMemAlloc'

export default class variableBlock extends Component {
  refresh (onClick) {
    return (<RefreshButton onClick={onClick} />)
  }
  remove (onClick) {
    return (<RemoveButton onClick={onClick} />)
  }
  render () {
    return (
      <div className='block'>
        <h1>Dynamic Memory Allocation</h1>
        <Form>
          <InputBlock description='Allocation Strategy'>
            <RadioBlock id='ff' name='rad' text='First Fit' />
            <RadioBlock id='bf' name='rad' text='Best Fit' />
            <RadioBlock id='wf' name='rad' text='Worst Fit' />
          </InputBlock>
          <InputBlock description='Total Memory'>
            <TextBlock />
            <AddButton />
          </InputBlock>
          <InputBlock description='Add Process'>
            <TextBlock />
            <AddButton />
          </InputBlock>
        </Form>
        <ProcessContainer memoryInfo={1000} refresh={this.refresh()}>
          <DynamicBlock pid={1} size={50} flex={1} removeButton={this.remove()} />
          <DynamicBlock size={50} flex={2} removeButton={this.remove()} />
          <DynamicBlock pid={2} size={50} flex={2} removeButton={this.remove()} />
        </ProcessContainer>
        <LegendContainer>
          <Legend color='black' description='Used Partition' />
          <Legend color='red' description='Internal Fragment' />
          <Legend color='orange' description='External Fragment' />
          <Legend color='white' description='Empty Partition' />
        </LegendContainer>
        <Table totalSpace={1000} spaceRemaining={700} externalFragmentation={150} />
      </div>
    )
  }
}
