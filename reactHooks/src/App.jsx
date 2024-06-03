import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [count, setCount] = useState(0)

  function increaseCount(){
    if(count >= 20){
      return
    }
    setCount(count + 1)
  }

  function decreaseCount(){
    if(count == 0){
      return
    }
    setCount(count - 1)
  }

  return (
    <>
      <h1>Basic App</h1>
      <div>{count}</div>
      <button onClick={increaseCount}>Click to increase Count {count}</button>
      <br></br>
      <button onClick={decreaseCount}>Click to Decrease Count {count}</button>
    </>
  )
}

export default App
