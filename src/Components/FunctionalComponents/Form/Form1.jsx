import React,{useState} from "react";
import './Form1.css'
import { Button } from  'react-bootstrap'
const Form1 = () => {
    const [value, setName] = useState('')
    const [Evalue, setEmail] = useState('')
    const [Pvalue,setPh]=useState('')
    
    return (
        <div className="fContainer">
            <label>Firsname</label>
            <input  className="nsme"type="text" placeholder="userName" onChange={(event)=>setName(event.target.value)} />

            <br />
            <p className="value">{ value}</p>
            <label>E-mail</label>
            <input type="email" placholder="E-mail" onChange={(event)=>setEmail(event.target.value)} />
            <br />
            <p className="value">{ Evalue}</p>
            
            <label>Contact No</label>
            <input type="phoneno" placholder="ContactNo" onChange={(event)=>setPh(event.target.value)} />
            <p className="value">{Pvalue}</p>
            <br />
            <Button variant="success">Submit</Button>
        </div>
    )

}
export default Form1