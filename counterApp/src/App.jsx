import { useState } from 'react'
import './App.css'

function App() {
  // hook return the variable and the method to which use to update the value of varible in the UI
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addCounter = () => {
    // so counter variable is getting updated but the problem is the UI is not getting updated so for this reason we use hooks
    // which the main reason for which React is created  

    // counter = counter + 1;
    // console.log(counter);

    // so we use useState hook to update counter value in UI by calling the setCount method

    if (counter > 100){
      setCounter(100);
    } else{
      setCounter(counter + 1);
    }
  }

  const subCounter = () => {
    if (counter <= 0){
      setCounter(0);
    } else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>counter is {counter}</h3>
      <br />
      <button
        onClick={addCounter}
      >{counter} Plus One</button>
      <button
        onClick={subCounter}
      >{counter} Minus One</button>
      <footer>Hello {counter} times</footer>
    </>
  )
}

export default App
