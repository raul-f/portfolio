import React from "react"

import Navbar from "./home/Navbar"
import TypedIntro from "./home/TypedIntro"
import LinkBox from "./home/LinkBox"

// <Home /> component

const HomeEn = props => {
    return (
        <div className="home">
            <div className="bg-filter" />
            <Navbar />
            <TypedIntro />
            <LinkBox />
        </div>
    )
}

export default HomeEn
