import React from 'react'
import './pages.css'
function Projects() {
    return (
        <div>
            <div className="Text-tabs">
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="/">  Home  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="education">  Education  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="skills">  Skills  </a>
                <a style={{color:"gray",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="projects">  Projects  </a>
                <a style={{color:"white",margin:20,fontSize:30,fontFamily:'RobotoMono-VariableFont_wght'}} href="experience">  Experience  </a>
            </div>
            <div className="head">Projects</div>
            <div className="text">
                <u>NoQueue</u>
                <br/>A mobile application built using flutter and Django.

                <br/>Creates appointments for students to avoid standing in long queues.
                <br/>Helps to maintain social distancing during COVID time while maximizing the efficiency.

                <br/><br/><u>Domain Specific Learner and Facilitator Assist Software</u>
                <br/>Built software to summarize corpus of data to indexed data and generating ppts, enable contextual searching, and n level summarization.

                <br/>Uses python to generate ppts and NLTK to summarize content logically.
                <br/>Helps teachers to devote minimum time on formatting and arranging data.
                <br/><br/><u>Spider Bots</u>
                <br/>It is a nature-inspired robot that is capable of walking on most terrains.

                <br/>A quadruped robot built with spider structure, using the networking via esp8266 and sync via Arduino.

                <br/><br/><u>Phone Detector</u>
                <br/>The electronic circuit on the printed circuit board detects the frequency within a range and alert the organization accordingly.

                <br/>Made for Schools and Colleges to detect if anyone is using a phone or not. If the phone is used in the class/lecture an alarm will go off to alert authorities.
            </div>
        </div>
    )
}

export default Projects
