import React from "react"

import Navbar from "./contact/Navbar"
import Logo from "./contact/Logo"
import Info from "./contact/Info"
import Adresses from "./contact/Adresses"
import Copyright from "./projects/Copyright"
import Watermark from "./contact/Watermark"
import LinkBox from "./contact/LinkBox"

function Contact() {
    return (
        <div id="contact">
            <Navbar />
            <Logo />
            <div className="content">
                <Info />
                <Adresses />
            </div>
            <Copyright />
            <Watermark />
            <LinkBox />
        </div>
    )
}

export default Contact
