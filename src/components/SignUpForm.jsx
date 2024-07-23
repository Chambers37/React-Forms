import { useState } from "react";

const SignUpForm = ({ setToken }) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {  
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          username: {username}, 
          password: {password}
        })
      });
      const jsonResponse = await response.json();
      
      setToken(jsonResponse.token)
      console.log('Submit call', jsonResponse)

    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <h2>Signup</h2>
      {
        error ? <p>{error}</p> : 

      <form onSubmit={handleSubmit}>
        <label>          
          Username:  <input required value={username} onChange={(event) => {setUserName(event.target.value)}}/>          
        </label>
        <br/>
        <label>          
          Password:  <input required type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>          
        </label>
        <br/>
        <button>Submit</button>
      </form>
      }
    </>
  )
}

export default SignUpForm