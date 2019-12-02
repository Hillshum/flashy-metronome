import React from 'react'

interface CounterProps {
  bpm: number
}

const getMillisFromBpm = (bpm: number) => {
  return 60 / bpm * 1000

}


const Counter = (props: CounterProps) => {
  const delay = getMillisFromBpm(props.bpm)
  const [isBlue, setBlue] = React.useState(false);

  React.useEffect(()=> {
    const intervalHandle = setInterval(()=> {
      console.log('update');
      setBlue(i=>!i);
    }, delay)

    return ()=>clearInterval(intervalHandle)
    

  }, [delay])

  return <div style={{backgroundColor: isBlue ? '#0000ff' : '#ff0000'}}>Hello</div>


}

export default Counter