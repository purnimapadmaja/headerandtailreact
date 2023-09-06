import React from "react";
import './Navfun.css'
import {Link} from 'react-router-dom'

import {Button,Navbar,Container,Nav} from "react-bootstrap";


const Navfun = () => {
    return (
      <Navbar bg="success" data-bs-theme="light">
        <ul className="orderlist">
          <li className="list"><Link  className="lin" to="/">Home</Link></li>
          <li className="list"><Link className="lin" to="/About">About Us</Link></li>
          <li className="list"><Link  className="lin" to="/Projects">Projects</Link></li>
          <li className="list"><Link  className="lin" to="/ContactuS">Contact Us</Link></li>
          
          </ul>

                <Button className="bt"    variant="warning">Sign In</Button>
                <Button className="bt"    variant="info">Sign Up</Button>
     
      </Navbar>
    )
}
export default Navfun