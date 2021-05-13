import React from 'react'

import './pages.css'
function Skiils() {
    return (
        <div>
            <div className="Text-tabs">
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="/">  Home  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="education">  Education  </a>
                <a style={{color:"gray",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="skills">  Skills  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="projects">  Projects  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="experience">  Experience  </a>
            </div>
            <div className="head">Skills</div>
            <div className="text"><b>Software:</b> Android, Java, Node.JS, JavaScript, XML, Flutter, C/C++, Flask, HTML/CSS, Python<br/>
            <br/><b>Hardware:</b> Arduino, AVR, ESP8266</div>
        </div>
    )
}

export default Skiils
