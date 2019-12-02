import React from 'react';
import './App.css';

import Counter from './components/counter'
import BpmPicker from './components/bpm-picker'


const DEFAULT_BPM = 30

function App() {
  const [bpm, setBpm] = React.useState(DEFAULT_BPM)
  return (
    <div className="App">
      <Counter bpm={bpm}/>
      <BpmPicker bpm={bpm} onChange={setBpm}/>
    </div>
  );
}

export default App;
