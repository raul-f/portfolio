import React from "react"
import { Link } from "react-router-dom"

const Navbar = props => {
    return (
        <nav className="navbar">
            <Link id="about-link" className="navlink" to="/about">
                {props.language === "pt_BR" ? "Sobre" : "About"}
                <span className="gray-point">.</span>
            </Link>
            <Link id="project-link" className="navlink" to="/projects">
                {props.language === "pt_BR" ? "Projetos" : "Projects"}
                <span className="gray-point">.</span>
            </Link>
            <Link id="contact-link" className="navlink" to="/contact">
                {props.language === "pt_BR" ? "Contato" : "Contact"}
                <span className="gray-point">.</span>
            </Link>
        </nav>
    )
}

export default Navbar
