import React from "react"

function Navbar() {
    return (
        <nav className="navbar">
            <a id="about-link" className="navlink" href="/pt/about">
                Sobre<span className="gray-point">.</span>
            </a>
            <a id="project-link" className="navlink">
                Projetos<span className="gray-point">.</span>
            </a>
            <a id="contact-link" className="navlink" href="/pt/contact">
                Contato<span className="gray-point">.</span>
            </a>
        </nav>
    )
}

export default Navbar
