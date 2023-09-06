import React from 'react'
import { Button } from 'react-bootstrap'

import './About.css'
import { useNavigate } from 'react-router-dom'

 
const About = () => {
   const navigate=useNavigate()
  return (
    <div class="about-container">
      <h1 class="head">
        “Heads refers to the side of the coin with a person's head on it. Tails refers to the opposite side, not because there is a tail on it, but because it is the opposite of heads.”
      </h1>
      <Button onClick={()=>navigate('/')}>Back to Home Page</Button>
    </div>
  )
}

export default About