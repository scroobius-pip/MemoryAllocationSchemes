import React, {Component} from 'react'
import './App.css'
import RemoveButton from '../../components/RemoveButton'
// import DynamicBlock from '../../components/DynamicBlock'
// import ProcessContainer from '../../containers/ProcessContainer'
// import RefreshButton from '../../components/RefreshButton'
import FixedBlock from '../../components/FixedBlock'
import FifoInputContainer from '../../containers/FifoInputContainer'
import FifoOutputContainer from '../../containers/FifoOutputContainer'
import LegendContainer from '../../containers/LegendContainer'
import Legend from '../../components/Legend'
import InputBlock from '../../components/InputBlock'
import RadioBlock from '../../components/RadioBlock'
import RoundButton from '../../components/RoundButton'
import Table from '../../components/Table'
class App extends Component {
  // const removeButton = ()=>(<RemoveButton onClick={() => { alert('Remove button
  // clicked') }} />)
  render () {
    const removeButton = () => {
      return <RemoveButton onClick={() => {
        alert('Remove button clicked')
      }} />
    }
    return (

      <div>
        <Table totalSpace={1200} spaceRemaining={200} externalFragmentation={500} />
        <InputBlock description='Allocation Strategy'>
          <RadioBlock id='f1' name='ff' text='First Fit' />
          <RadioBlock id='f2' name='ff' text='Best Fit' />
          <RadioBlock id='f3' name='ff' text='Worst Fit' />
          <RoundButton onClick={() => { alert('button clicked') }} text='Start' />
        </InputBlock>
        <LegendContainer>
          <Legend color='#984ddf' description='Used Partition' />
          <Legend color='#4ddfa5' description='Internal Fragmentation' />
          <Legend color='#df5b4d' description='External Fragmentation' />
          <Legend color='#d52e2e' description='Empty Partition' />
        </LegendContainer>
      </div>
    )
  }
}

export default App
