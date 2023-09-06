import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  
  return (
    <div className="background-container">
      <div className="cont">
      <h1 className="heading">Head and Tail</h1>
      <Link to="/About"><button  className="butonaboutus">About Us</button></Link>
      
      <Link to="/HeaderAndTail"><button className="butonheads">HeaderAndTail</button></Link>
      </div>
      </div>
  )
}

export default Home