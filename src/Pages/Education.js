import React from 'react'
import './pages.css'
function Education() {
    return (
        <div>
            <div className="Text-tabs">
                <a style={{color:"white",margin:20}} href="/">  Home  </a>
                <a style={{color:"gray",margin:20}} href="education">  Education  </a>
                <a style={{color:"white",margin:20}} href="skills">  Skills  </a>
                <a style={{color:"white",margin:20}} href="projects">  Projects  </a>
                <a style={{color:"white",margin:20}} href="experience">  Experience  </a>
            </div>
            <div className="head">Education</div>
            <div className="text"><b>Bharati Vidyapeeth's College Of Engineering </b><br/>· July 2018​ to Current<br/><br/>
            <b>Lady Irwin School</b> <br/> · Apr. 2006​ to Apr. 2018​</div>
        </div>
    )
}

export default Education
