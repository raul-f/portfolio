import React from "react"
import { Link } from "react-router-dom"

const AboutLeft = () => {
    return (
        <div className="about-left">
            <Link className="logo" to="/home">
                <img
                    src="../app/assets/profile-pic-2.jpg"
                    className="profile-picture"
                />
                <h1 className="logo-name">Raul Figueiredo.</h1>
            </Link>
        </div>
    )
}

export default AboutLeft
