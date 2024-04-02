import { useContext } from "react";
import UserContext from "../context/UserContext"

function Profile() {
  const {user} = useContext(UserContext);

  if (!user) {
    return <div className="bg-gray-300 text-3xl">Please Login First..!</div>
  }

  return (
    <div className="bg-gray-300 text-3xl">Welcome {user.username}</div>
  )
}

export default Profile