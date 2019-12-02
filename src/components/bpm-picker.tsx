import React from 'react';

interface Props {
  bpm: number,
  onChange: (bpm: number)=> void
}

const BpmPicker = ({bpm, onChange}: Props)=> {
  return <input type="text" value={bpm} onChange={e=>onChange(Number(e.target.value))}/>
}

export default BpmPicker;