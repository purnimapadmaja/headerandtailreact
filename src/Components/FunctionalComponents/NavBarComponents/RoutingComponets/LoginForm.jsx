import React ,{useState} from 'react'
import { Button } from 'react-bootstrap'
import './LoginForm.css'

const LoginForm = () => {
    const [username, setName ] = useState("")
    const [password, setPassword] = useState("")
    const[error,setError]=useState("")
    const changeUsername = (event) => {
        setName (event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
  const onSubmit = (event) => {
      event.preventDefault()
      console.log(username, password)
      if (username === "" && password === "") {
          setError("please provide username and password")
        
      }
         

      else if(username.length>=0 && password.length=="") {
          setError("please Enter password") 
         
      }
      else if (username.length == "" && password.length >= 0) {
          setError("Please Enter Username")
        
      }
      else {
          setError("Login Succesfuuly")
      }
 }
  return (
      <div className="f-container">
          <form className="formContainer">
              
              <br />
              <br/>
              <label className="label" htmlFor='username'>Username</label>
              <input type="text" onChange={changeUsername} placeholder=" UserName" className="userName" name="username" value={ username} id="username" />
              <br />
              <br/>
              <label  className="label" htmlFor='passwordd'>Password</label>
              <input type="password" value={password} onChange={ changePassword} placeholder="Password" className="userName" name="password" id="passwordd" />
              <br />
              <br/>
              <Button variant='warning' onClick={onSubmit}>Submit</Button>
              {error && <p className="errorMsg">{ error}</p>}
          </form>
    </div>
  )
}

export default LoginForm