import React from "react"

function Navbar() {
    return (
        <nav className="navbar">
            <a id="about-link" className="navlink">
                About<span class="gray-point">.</span>
            </a>
            <a id="project-link" className="navlink" href="/projects">
                Projects<span class="gray-point">.</span>
            </a>
            <a id="contact-link" className="navlink" href="/contact">
                Contact<span class="gray-point">.</span>
            </a>
        </nav>
    )
}

export default Navbar
