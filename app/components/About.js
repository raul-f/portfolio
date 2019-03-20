import React from "react"

import Navbar from "./Navbar"
import AboutLeft from "./about/AboutLeft"
import AboutRight from "./about/AboutRight"
import Watermark from "./Watermark"
import LinkBox from "./LinkBox"

const About = props => {
    return (
        <div className="about">
            <Navbar language={props.language} />
            <AboutLeft />
            <AboutRight language={props.language} />
            <Watermark language={props.language} page="about" />
            <LinkBox />
            <div className="mobile-footer" />
        </div>
    )
}

export default About
