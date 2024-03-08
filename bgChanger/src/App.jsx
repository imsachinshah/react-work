import { useState } from 'react'
// import './App.css'
// import Button from './components/Button'

function App() {
  // const [count, setCount] = useState(0)

  // const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange', 'purple']

  // const buttons = colors.map((color, index) => < Button id={index} title={color.toLocaleUpperCase()} className="mr-5" />);

  // other way to create
  const [colour, setColour] = useState("black");

  return (
    // one way to create 
    // <>
      // <h1>Background Color Changer</h1>
    //   <div className='flex bg-white p-2 rounded'>
    //     {buttons}
    //   </div>
    // </>

    // other way to create
    <>
      <div className="w-full h-screen flex justify-center items-center" style={{backgroundColor: colour}}>
        <h1 className='text-white text-xl'>Background Color Changer</h1>
        <div className="fixed bottom-7 left-48 right-48 inset-x-0"
        >
          <div className="flex justify-center items-center w-auto p-2 m-2  rounded-xl gap-2 text-white" 
            style={{backgroundColor: "white"}}
          >
            <button
              onClick={() => (setColour("red"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "red"}}
            >Red</button>
            <button
              onClick={() => (setColour("blue"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
              onClick={() => (setColour("black"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "black"}}
            >Black</button>
            <button
              onClick={() => (setColour("orange"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "orange"}}
            >Orange</button>
            <button
              onClick={() => (setColour("pink"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "pink"}}
            >Pink</button>
            <button
              onClick={() => (setColour("purple"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "purple"}}
            >Purple</button>
            <button
              onClick={() => (setColour("violet"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "violet"}}
            >Violet</button>
            <button
              onClick={() => (setColour("yellow"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
              onClick={() => (setColour("green"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "green"}}
            >Green</button>
            <button
              onClick={() => (setColour("gray"))}
              className="rounded-xl p-3"
              style={{backgroundColor: "gray"}}
            >Gray</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
