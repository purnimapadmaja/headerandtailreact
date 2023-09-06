import React from 'react'
import './Projects.css'
 import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const Projects = () => {
  const navigate=useNavigate()
  return (
    <div class="projects-button">
      <Button variant="secondary" onClick={() => navigate("/Projects/CounterAppp ")} className="butn-c">

     Counter App
      </Button>
      <Button variant="success" className="butn-c" onClick={() => navigate("/Projects/TodoList ")}> TodoList</Button>
      <Button variant="warning" className="butn-c" onClick={() => navigate("/Projects/LoginForm")}>LoginForm</Button>
      <Button variant="danger" className="butn-c" onClick={() => navigate("/Projects/AddUsersData")}>Users Data</Button>
     
    </div>
  )
}

export default Projects