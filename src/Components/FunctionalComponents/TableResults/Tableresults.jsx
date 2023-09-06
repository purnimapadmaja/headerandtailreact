import React,{useState,useEffect} from "react";
import './Tableresults.css'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Tableresults = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => { fetchUserData() }, [])
    const fetchUserData = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUserData(response.data)
    }
    
    const Purnimaresults = [{
        id: 1,
        subject: "Es",
        ObtainedMarks: 24,
 ActualMarks:33,
        result:"pass"
    },
        {
        id: 2,
        subject: "Maths",
            ObtainedMarks: 34,
     ActualMarks:44,
        result:"pass"
        },
        {
        id: 3,
            subject: "Physics",
        ObtainedMarks:44,
        ActualMarks:44,
        result:"pass"
    }
    ]
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <td>Name</td>
                    <td>username</td>
                    <td>email</td>
                    <td>phone#</td>
                    <td>website</td>
                    
                </thead>
                <tbody>
                    {userData.map(({  id,name,username,email,phone,website }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                             <td>{website}</td>
                        </tr>
                    ))}
                       
                  
                </tbody>
        </Table>
        </div>
    )
}
export default Tableresults