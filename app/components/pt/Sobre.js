import React from "react"

import Navbar from "./sobre/Navbar"
import AboutLeft from "./sobre/AboutLeft"
import AboutRight from "./sobre/AboutRight"
import Watermark from "./sobre/Watermark"
import LinkBox from "./sobre/LinkBox"

const Sobre = () => {
    return (
        <div className="about">
            <Navbar />
            <AboutLeft />
            <AboutRight />
            <Watermark />
            <LinkBox />
        </div>
    )
}

export default Sobre
