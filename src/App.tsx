import React from 'react';
import './App.css';

import Counter from './components/counter'

const DEFAULT_BPM = 30

function App() {
  const [bpm, setBpm] = React.useState(DEFAULT_BPM)
  return (
    <div className="App">
      <Counter bpm={bpm}/>
    </div>
  );
}

export default App;
