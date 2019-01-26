import React from "react"
import { Link } from "react-router-dom"

const Navbox = props => {
    return (
        <div className="outer-navbox">
            <div className="inner-navbox">
                <Link to="/about" className="mobile-link">
                    {props.language === "pt-BR" ? "Sobre" : "About"}
                    <span className="gray-text">.</span>
                </Link>
                <Link to="/projects" className="mobile-link">
                    {props.language === "pt-BR" ? "Projetos" : "Projects"}
                    <span className="gray-text">.</span>
                </Link>
                <Link to="/contact" className="mobile-link">
                    {props.language === "pt-BR" ? "Contato" : "Contact"}
                    <span className="gray-text">.</span>
                </Link>
                <button
                    id="fullscreent-link"
                    className="mobile-link"
                    onClick={() => {
                        document.exitFullscreen()
                    }}
                >
                    {props.language === "pt-BR"
                        ? "Sair da Tela Cheia"
                        : "Exit Fullscreen"}
                    <span className="gray-text">.</span>
                </button>
            </div>
        </div>
    )
}

export default Navbox
