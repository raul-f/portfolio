import React from "react"

import Navbar from "./Navbar"
import TypedIntro from "./home/TypedIntro"
import LinkBox from "./LinkBox"
import MobileMenu from "./MobileMenu"

// <Home /> component

const Home = props => {
    return (
        <div className="home" id="home">
            <div className="bg-filter" />
            <MobileMenu />
            <Navbar language={props.language} />
            <TypedIntro language={props.language} />
            <LinkBox />
        </div>
    )
}

export default Home
