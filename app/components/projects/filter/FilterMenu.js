import React from "react"

const FilterMenu = props => {
    let sets = [
        {
            id: "personal-picks",
            name: { "pt-BR": "Destaques", "en-US": "Personal Picks" },
            hash: "06e26662fe130224cb8895736afe5524"
        },
        {
            id: "html-css-websites",
            name: {
                "pt-BR": "Sites HTML & CSS",
                "en-US": "HTML & CSS Websites"
            },
            hash: "6d4086b798af8566f556bbf9cc39580b"
        },
        {
            id: "single-page-apps",
            name: {
                "pt-BR": "Apps de página única",
                "en-US": "Single-Page Apps"
            },
            hash: "52ae1c2444152bd48ba1aad488f3243b"
        },
        {
            id: "d3js-charts",
            name: { "pt-BR": "Gráficos com D3.js", "en-US": "D3.js charts" },
            hash: "3c1213e5911324bc1e476eb3482236ab"
        },
        {
            id: "full-stack-web-apps",
            name: {
                "pt-BR": "Aplicativos Full-Stack",
                "en-US": "Full-Stack Web Apps"
            },
            hash: "8c31e91e96c5c06e018c53bfd37019db"
        },
        {
            id: "microservices",
            name: { "pt-BR": "Microsserviços", "en-US": "Microservices" },
            hash: "7d488fa9de381b31c51f4e86f62c15ab"
        },
        {
            id: "template",
            name: { "pt-BR": "", "en-US": "" },
            hash: ""
        }
    ]
    let options = sets.map(value => {
        return (
            <button
                type="button"
                id={value.id}
                key={value.hash}
                onClick={props.change}
                onMouseOver={props.preview}
                onMouseOut={props.preview}
                className={
                    props.selected === value.id
                        ? "filter-option sel"
                        : "filter-option"
                }
            >
                {value.name[props.language]}
            </button>
        )
    })

    return (
        <div className="filter-menu-box">
            <div className="filter-menu">
                <h2 className="menu-title">
                    {props.language === "pt-BR" ? "PROJETOS" : "PROJECTS"}
                </h2>
                <hr className="menu-break" />
                {options}
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
