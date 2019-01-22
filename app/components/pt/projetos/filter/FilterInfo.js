import React from "react"

const FilterInfo = props => {
    const descriptions = {
        "personal-picks":
            "Uma seleção dos cinco projetos de que eu tenho mais orgulho.",
        "html-css-websites":
            "Páginas bem simples que eu desenvolvi utilizando apenas HTML e CSS puro.",
        "single-page-apps":
            "Pequenas aplicações web de página única que eu desenvolvi usando React.",
        "d3js-charts":
            "Cinco esquemas diferentes de representação de dados que eu desenvolvi com D3.js.",
        "full-stack-web-apps":
            "APIs que eu desenvolvi, com as páginas correspondentes para utilizá-las.",
        all: "The entirety of the projects I have developed so far."
    }
    return (
        <div className="filter-info">
            <p className="filter-info-text">{descriptions[props.active]}</p>
        </div>
    )
}

export default FilterInfo
