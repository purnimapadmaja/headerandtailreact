import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-head">About Me</h1>
      <br />
      <br />
      <br />
      <br />
       <br/>
      <div className="a-container">
        <div className="image-container">
          <img src="https://w0.peakpx.com/wallpaper/398/452/HD-wallpaper-girl-silhouette-shadow-birds-flying-silhouette-girls-birds-moon.jpg" alt="girl" className="girlImage"/>
        </div>
        <div class="para-container">
          <p className="AbPara">Purnima</p>
          <p className="tag-line"><u>Never Give up</u> </p>
          <p className="ab"> Lives in Hyderabad .Born  in Tanuku ,Bought in Eluru .Completed my B.tech in 2018 stream of ECE </p>
          <p className="ab">Hobbies are  Cooking and Watching Movies and Gardening</p>
          <p className="ab">Technical Skills are HTML,CSS,JS</p>
          <p className="abt"><mark>Trainers:</mark>Chankya and Tejaswini</p>
        </div>
      </div>

    </div>
  )
}

export default About