import React from "react"

import Navbar from "./Navbar"
import TypedIntro from "./home/TypedIntro"
import LinkBox from "./LinkBox"

// <Home /> component

const Home = props => {
    return (
        <div className="home">
            <div className="bg-filter" />
            <Navbar language={props.language} />
            <TypedIntro language={props.language} />
            <LinkBox />
        </div>
    )
}

export default Home
