import React,{useState} from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const DataInput = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorText, setError] = useState('')

  const navigate =useNavigate()
  const submitForm = (event) => {
    event.preventDefault()
    if (email.length===0 || password.length===0) {
      setError("please enter correct creditionals")
      console.log("please enter text")
    }
   else {
       const newuserDatav= {
        "email": email,
        "password":password,
      }
      axios.post('http://localhost:3002/user', newuserDatav)
        .then((response) => {
        if (response.status === 201) {
          setError('')
          navigate('/Projects/AddUsersData')

        }
        else {
          setError("something went wrong")
        }
      }).catch((error)=>setError(error.message))
     }
  }
  return (
    <div>
      <Form>
        <label>Email</label>
        <input type="email" placeholder="Enter-Email" name="emails"  onChange={(event)=>setEmail(event.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter-Password" name="passwords"  onChange={(event)=>setPassword(event.target.value)} />
        <Button onClick={submitForm}>Login</Button>
        {errorText && <p>{errorText}</p>}
      </Form>
    </div>
  )
}

export default DataInput


