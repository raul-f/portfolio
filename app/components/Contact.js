import React from "react"

import Navbar from "./Navbar"
import Logo from "./Logo"
import Info from "./contact/Info"
import Adresses from "./contact/Adresses"
import Copyright from "./contact/Copyright"
import Watermark from "./Watermark"
import LinkBox from "./LinkBox"

const Contact = props => {
    console.log(props.language)
    return (
        <div className="contact">
            <Navbar language={props.language} />
            <Logo />
            <div className="content">
                <Info language={props.language} />
                <Adresses language={props.language} />
            </div>
            <Copyright language={props.language} />
            <Watermark language={props.language} page="contact" />
            <LinkBox />
        </div>
    )
}

export default Contact
