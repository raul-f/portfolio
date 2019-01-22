import React from "react"

import Navbar from "./contato/Navbar"
import Logo from "./contato/Logo"
import Info from "./contato/Info"
import Adresses from "./contato/Adresses"
import Copyright from "./contato/Copyright"
import Watermark from "./contato/Watermark"
import LinkBox from "./contato/LinkBox"

const Contato = () => {
    return (
        <div className="contact">
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

export default Contato
