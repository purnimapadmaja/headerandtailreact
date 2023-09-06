import React from 'react'
import './Projects.css'


const PageNotFound = () => {
  return (
      <div class="page-container">
          
           <img
      src="https://res.cloudinary.com/dwa7i6cvn/image/upload/f_auto,q_auto/erroring_1_fbyaqu"  alt="notfound"
              className="notfound-img" />
          <h1 className="pageHead">......Page Not Found</h1>
          <br/>
          <p className="pagepara"> We Cannot Find the Page you are looking For </p>
    </div>
  )
}

export default PageNotFound