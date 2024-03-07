// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  
  // const cardData = {
  //   title: "Hello World",
  //   desc: "this is desc"
  // }
  const buttonData = "View"

  return (
    <>
      <h1 className='mb-2'>Tailwind and Props</h1>
      {/* <Card cardData={cardData} buttonData= {buttonData}/>  */}
      <Card title="Macbook Air" buttonData={buttonData}/>
      <br />
      <Card title="Macbook Pro" />
    </>
  )
}

export default App
