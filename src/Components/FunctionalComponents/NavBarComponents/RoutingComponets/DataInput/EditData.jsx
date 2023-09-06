import React , {useState} from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useNavigate,useLocation } from 'react-router-dom'

const EditData = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { id, email, password } = location?.state
    const [emailstate, setEmailState] = useState(email||'')
  const [passwordstate, setPasswordState] = useState(password||'')
  const [errorText, setError] = useState('')


    const submitForm = (event) => {
        event.preventDefault()
        if (emailstate.length === 0 || passwordstate.length === 0) {
            setError("please enter correct creditionals")
            console.log("please enter text")
        }
        else {
      

            const updatedRecord = { email: emailstate, password: passwordstate }
            axios.put(`http://localhost:3002/user/${id}`, updatedRecord).then((response) => {
                response.status === 200 ? navigate('/Projects/AddUsersData') : setError("there is some network issues")
            })
        
        }
    }
  return (
   <div>
      <Form>
        <label>Email</label>
              <input type="email" placeholder="Enter-Email" value={emailstate } name="emailstate"  onChange={(event)=>setEmailState(event.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter-Password" value={passwordstate} name="passwordstate"  onChange={(event)=>setPasswordState(event.target.value)} />
        <Button onClick={submitForm}>Update</Button>
        {errorText && <p>{errorText}</p>}
      </Form>
    </div>
  )
}

export default EditData