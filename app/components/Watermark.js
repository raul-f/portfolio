import React from "react"

const Watermark = props => (
    <h2 className="watermark">
        {props.language === "pt-BR"
            ? props.page === "about"
                ? "Sobre"
                : props.page === "projects"
                ? "Projetos"
                : "Contato"
            : props.page === "about"
            ? "About"
            : props.page === "projects"
            ? "Projects"
            : "Contact"}
        .
    </h2>
)

export default Watermark
