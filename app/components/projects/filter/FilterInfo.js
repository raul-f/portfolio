import React from "react"

const FilterInfo = props => {
    const descriptions = {
        "personal-picks": "A selection of the five projects I am proudest of.",
        "html-css-websites":
            "Very simple pages I developed using only HTML and pure CSS.",
        "single-page-apps": "Single-page apps I developed using React.",
        "d3js-charts":
            "Five different types of charts I developed using the popular data visualization library, D3.js.",
        "full-stack-web-apps":
            "Some APIs I have developed, with the accompanying pages that use them.",
        all: "The entirety of the projects I have developed so far."
    }
    return (
        <div className="filter-info">
            <p className="filter-info-text">{descriptions[props.active]}</p>
        </div>
    )
}

export default FilterInfo
