import React ,{ useState,useEffect} from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const AddUsersData = () => {
  const [currentData, setcurrentData] = useState([])

   useEffect(() => { fetchUserData() }, [])
  const fetchUserData = async () => {
    let response = await axios.get('http://localhost:3002/user').then((response) =>
      response.data).then((data)=>{ setcurrentData(data)})
    
    
   
      // console.log(response.data)
  }
  const navigate=useNavigate()
  // const newuserData=()=>{
  //   const newuserDatav={
  //     "fisrtname": "padmaja",
  //     "lastname": "voruganti",
  //     "phoneno":"6305958727",
  //     "email":"purnimavoruganti@gmail.com",
  //     "address":"4-7-7Eluru",
  //     "Degree" :"B.Tech",
  //     "Country":"IN"}
  //   axios.post('http://localhost:3002/user', newuserDatav)
  //   fetchUserData()
  // }
  const deletenewData=(id) => {
    axios.delete(`http://localhost:3002/user/${id}`)
    
     fetchUserData()
  }
  // const edithpatchdata = (id) => {
  //   const updatedRecord = { fisrtname: "janaki", email: "janaki12@gmail.com" }
  //   axios.patch(`http://localhost:3002/user/${id}`, updatedRecord)
  //    fetchUserData()
  // }
  // const editdata = (id) => {
  //   const updatedRecord = { fisrtname: "valli" }
  //   axios.put(`http://localhost:3002/user/${id}`, updatedRecord)
  //    fetchUserData()
  // }
  return (
   
    <div>
      <br/>
      <Button onClick={()=> navigate("/Projects/AddUsersData/DataInput")} variant="secondary">Add Users Data</Button>
      <br />
       <br/>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
          <td>firstname</td>
          <td>lastname</td>
          <td>phoneno#</td>
            <td>email</td>
            <td>password</td>
          <td>address</td>
          <td>Degree</td>
            <td>Country</td>
            <td>Edit</td>
       
            <td>Delete</td>
            </tr>
                    
        </thead>
        <tbody>
          {currentData.map(({ id, fisrtname, lastname, phoneno,email,password, address, Degree, Country }) => (
            <tr key={id}>
              <td>{fisrtname}</td>
              <td>{lastname}</td>
              <td>{phoneno}</td>
              <td>{email}</td>
               <td>{ password}</td>
              <td>{address}</td>
              <td>{Degree}</td>
              <td>{Country}</td>
           
              <td><Button variant="info" onClick={() => navigate(`/Projects/AddusersData/EditData/${id}`, {
                state: {
                  id: id,
                  email: email,
                  password: password
                }
              })} >Edit put</Button></td>
              {/* <td><Button variant="info" onClick={()=>edithpatchdata(id)}>Edit patch</Button></td> */}
              <td><Button variant="danger" onClick={()=>deletenewData(id)}> Delete</Button></td>
            </tr>
            
          ))}
                       
                  
        </tbody>
      </Table>
    </div>
  
  )
}
export default AddUsersData