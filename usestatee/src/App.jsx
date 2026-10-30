import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(0)
  const [count, setCount] = useState(0)
  function pules(){
    setfirst(first + 1)
  }
  function munes(){
    setfirst(first - 1)
  }
  return (
    <>
    <h1>{first}</h1>
      <button onClick={pules}>+</button>
      <button onClick={munes}>-</button>
    </>
  )
}

export default App
