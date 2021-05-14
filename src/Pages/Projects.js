import React from 'react'
import './pages.css'
function Projects() {
    return (
        <div>
            <div className="Text-tabs">
                <a style={{color:"white",margin:"calc(1vw)",fontSize:"calc(2vw)",fontFamily:'RobotoMono-VariableFont_wght'}} href="/">  Home  </a>
                <a style={{color:"white",margin:"calc(1vw)",fontSize:"calc(2vw)",fontFamily:'RobotoMono-VariableFont_wght'}} href="education">  Education  </a>
                <a style={{color:"white",margin:"calc(1vw)",fontSize:"calc(2vw)",fontFamily:'RobotoMono-VariableFont_wght'}} href="skills">  Skills  </a>
                <a style={{color:"gray",margin:"calc(1vw)",fontSize:"calc(2vw)",fontFamily:'RobotoMono-VariableFont_wght'}} href="projects">  Projects  </a>
                <a style={{color:"white",margin:"calc(1vw)",fontSize:"calc(2vw)",fontFamily:'RobotoMono-VariableFont_wght'}} href="experience">  Experience  </a>
            </div>
            <div className="head">Projects</div>
            <div className="text">
                <u>NoQueue</u>
                <br/>-&gt;A mobile application built using flutter and Django.

                <br/>-&gt;Creates appointments for students to avoid standing in long queues.
                <br/>-&gt;Helps to maintain social distancing during COVID time while maximizing the efficiency.

                <br/><br/><u>Domain Specific Learner and Facilitator Assist Software</u>
                <br/>-&gt;Built software to summarize corpus of data to indexed data and generating ppts, enable contextual searching, and n level summarization.

                <br/>-&gt;Uses python to generate ppts and NLTK to summarize content logically.
                <br/>-&gt;Helps teachers to devote minimum time on formatting and arranging data.
                <br/><br/><u>Spider Bots</u>
                <br/>-&gt;It is a nature-inspired robot that is capable of walking on most terrains.

                <br/>-&gt;A quadruped robot built with spider structure, using the networking via esp8266 and sync via Arduino.

                <br/><br/><u>Phone Detector</u>
                <br/>-&gt;The electronic circuit on the printed circuit board detects the frequency within a range and alert the organization accordingly.

                <br/>-&gt;Made for Schools and Colleges to detect if anyone is using a phone or not. If the phone is used in the class/lecture an alarm will go off to alert authorities.
            </div>
        </div>
    )
}

export default Projects
