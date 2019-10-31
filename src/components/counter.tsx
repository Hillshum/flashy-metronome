import React from 'react'

interface CounterProps {
  bpm: number
}

const getMillisFromBpm = (bpm: number) => {
  return 60 / bpm * 1000

}


const Counter = (props: CounterProps) => {
  const delay = getMillisFromBpm(props.bpm)

  React.useEffect(()=> {
    const intervalHandle = setInterval(()=> console.log('update'), delay)

    return ()=>clearInterval(intervalHandle)

  }, [delay])

  return null


}

export default Counter