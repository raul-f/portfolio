import React from "react"

const FilterMenu = props => {
    return (
        <div className="filter-menu-box">
            <div className="filter-menu">
                <h2 className="menu-title">PROJETOS</h2>
                <hr className="menu-break" />
                <button
                    type="button"
                    id="personal-picks"
                    onClick={props.change}
                    onMouseOver={props.preview}
                    onMouseOut={props.preview}
                    className={
                        props.selected === "personal-picks"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    Destaque
                </button>
                <button
                    type="button"
                    id="html-css-websites"
                    onClick={props.change}
                    onMouseOver={props.preview}
                    onMouseOut={props.preview}
                    className={
                        props.selected === "html-css-websites"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    Sites HTML & CSS
                </button>
                <button
                    type="button"
                    id="single-page-apps"
                    onClick={props.change}
                    onMouseOver={props.preview}
                    onMouseOut={props.preview}
                    className={
                        props.selected === "single-page-apps"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    Apps de página única
                </button>
                <button
                    type="button"
                    id="d3js-charts"
                    onClick={props.change}
                    onMouseOver={props.preview}
                    onMouseOut={props.preview}
                    className={
                        props.selected === "d3js-charts"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    Gráficos com D3.js
                </button>
                <button
                    type="button"
                    id="full-stack-web-apps"
                    onClick={props.change}
                    onMouseOver={props.preview}
                    onMouseOut={props.preview}
                    className={
                        props.selected === "full-stack-web-apps"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    Aplicativos Full-Stack
                </button>
                {/*<button
                    type="button"
                    id="all"
                    onClick={props.changeFilter}
                    onMouseOver={props.previewFilter}
                    onMouseOut={props.previewFilter}
                    className={
                        props.selected === "all"
                            ? "filter-option sel"
                            : "filter-option"
                    }
                >
                    All
                </button>*/}
            </div>
        </div>
    )
}

export default FilterMenu
