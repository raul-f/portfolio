import React from "react"

const FilterInfo = props => {
    const descriptions = {
        "personal-picks": {
            "en-US": "A selection of the five projects I am proudest of.",
            "pt-BR":
                "Uma seleção dos cinco projetos de que eu tenho mais orgulho."
        },
        "html-css-websites": {
            "en-US": "Pages I developed using only HTML and pure CSS.",
            "pt-BR":
                "Páginas que eu desenvolvi utilizando apenas HTML e CSS puro."
        },
        "single-page-apps": {
            "en-US": "Small, single-page web apps I developed using React.",
            "pt-BR":
                "Pequenas aplicações web de página única que eu desenvolvi usando React."
        },
        "d3js-charts": {
            "en-US":
                "Five different types of charts I developed using the popular data visualization library, D3.js.",
            "pt-BR":
                "Cinco esquemas diferentes de representação de dados que eu desenvolvi com D3.js."
        },
        "full-stack-web-apps": {
            "en-US":
                "Some APIs I have developed, with the accompanying pages that use them.",
            "pt-BR":
                "APIs que eu desenvolvi, com as páginas correspondentes para utilizá-las."
        },
        microservices: {
            "en-US": "Small, modular, back-end focused APIs.",
            "pt-BR": "APIs diminutas, modulares e voltadas para o back-end."
        },
        all: {
            "en-US": "The entirety of the projects I have developed so far.",
            "pt-BR": ""
        }
    }
    return (
        <div className="filter-info">
            <p className="filter-info-text">
                {descriptions[props.active][props.language]}
            </p>
        </div>
    )
}

export default FilterInfo
