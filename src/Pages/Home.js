import React from 'react'
import '../App.css';
import './pages.css';
import img from '../Assets/myImage.jpeg';

import Typical from 'react-typical';

function Home() {
    return (
      <div className="Home">
        
        <img src={img}
         alt=""
         style={{
          width: "calc(45vh + 2vmin)",
          height: "calc(45vh + 2vmin)",
          borderRadius: "50%",
        }}/>
        <div className="Text-size">
        <p>Hi 👋, I am Himandri Sharma</p>
        </div>
      <p style={{display:'flex',justifyContent:'center'}}>
        I'm a 🔹
          <Typical 
              steps={['Tech-enthusiast ', 3000, 'Leader ✏️', 3000,'Developer 👩🏽‍💻', 3000]}
              loop={Infinity}
              wrapper="b"
            />
        
      </p>
        <div className="Text-tabs">
          <a style={{color:"white",margin:20}} href="education">  Education  </a>
          <a style={{color:"white",margin:20}} href="skills">  Skills  </a>
          <a style={{color:"white",margin:20}} href="projects">  Projects  </a>
          <a style={{color:"white",margin:20}} href="experience">  Experience  </a>
        </div>
      </div>
    )
}

export default Home
