import { useState } from "react"
import Authenticate from "./components/Authenticate"
import SignUpForm from "./components/SignUpForm"

const App = () => {

  const [token, setToken] = useState(null);
  

  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenticate token={token} />
    </>
  )
}

export default App
