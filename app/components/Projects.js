import React from "react"
import Navbar from "./projects/Navbar"
import LinkBox from "./projects/LinkBox"
import Logo from "./projects/Logo"

function Projects() {
    return (
        <div id="projects">
            <div className="projects-background" />
            <Logo />
            <Navbar />
            <LinkBox />
        </div>
    )
}

export default Projects
