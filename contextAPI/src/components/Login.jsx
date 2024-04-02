import { useContext } from "react"
import { useState } from "react"
import UserContext from "../context/UserContext"


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div className="bg-gray-500">
        <h1 className="text-2xl">Login</h1>
        <input 
          type="text" 
          value={username}
          className="text-2xl bg-gray-600 rounded-md text-white"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <br />
        <input 
          type="text" 
          value={password}
          className="text-2xl bg-gray-600 rounded-md text-white"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button
          className="bg-gray-800 m-2 p-2 rounded text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
  )
}

export default Login