import React, { Component } from 'react'
import './App.css'
// import AddButton from '../../components/AddButton'
import RemoveButton from '../../components/RemoveButton'
import DynamicBlock from '../../components/DynamicBlock'
import ProcessContainer from '../../containers/ProcessContainer'
import RefreshButton from '../../components/RefreshButton'
import FixedBlock from '../../components/FixedBlock'
import FifoInputContainer from '../../containers/FifoInputContainer'
import FifoOutputContainer from '../../containers/FifoOutputContainer'
class App extends Component {
  // const removeButton = ()=>(<RemoveButton onClick={() => { alert('Remove button clicked') }} />)
  render () {
    const removeButton = () => {
      return <RemoveButton onClick={() => { alert('Remove button clicked') }} />
    }
    return (

      <div>
        <FifoInputContainer />
        <FifoOutputContainer />

      </div>
    )
  }
}

export default App
