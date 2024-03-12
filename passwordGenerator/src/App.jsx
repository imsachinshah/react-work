/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passRef = useRef('')

  // useCallback is used to memorize the function and cache it for optimizing performance of the function 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()~+-=?'

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // useEffect() is used to call when based on condition chnage dependencies
  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <h1 className='mb-2'>Password Generator</h1>
      <div className='container bg-white m-10'>
        <div className="h-3 w-4">
          <input 
          type="text"
          className='bg-white rounded'
          placeholder='password'
          value={password} 
          readOnly
          ref={passRef}
          />
          <button
          onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className='p-0'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length {length}</label>
          <input 
          type="checkbox"
          value={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="">Numbers</label>
          <input 
          type="checkbox"
          value={charAllowed} 
          onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="">Characters</label>
        </div>

      </div>
    </>
  )
}

export default App
