import { useState } from "react"

const Authenticate = ({ token }) => {

  const [error, setError] = useState(null)
  const [success, setSuccuess] = useState({})

  const handleClick = async () => {

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: "GET", 
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          }
        })
      const jsonResponse = await response.json();
      console.log('Auth Reponse:', jsonResponse)
      setSuccuess(jsonResponse)

    } catch (error) {
      setError(error.message)

    }
    
  }

  return (
    <>
      {
        success.message ? 
        <>
          <p>{success.message}</p>
          <p>{success.data.username.username}</p>
        </> : 
        <div>
          <h2>Authenticate</h2>
          <button onClick={handleClick}>Authenticate</button>
        </div>
      }
    </>
  )
}

export default Authenticate