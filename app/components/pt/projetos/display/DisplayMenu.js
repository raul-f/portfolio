import React from "react"

const DisplayMenu = props => {
    const sets = {
        "personal-picks": {
            setName: "DESTAQUE",
            setOptions: [
                {
                    name: "Máquina de Citações Aleatórias",
                    id: "random-quote-machine",
                    hash: "166f6abef74056d74e89fa20d5f6c793"
                },
                {
                    name: "Cronômetro Pomodoro",
                    id: "pomodoro-clock",
                    hash: "9365886184452fafbaf4c97d5fcd01dc"
                },
                {
                    name: "Shortr",
                    id: "shortr",
                    hash: "461d81e54ed7f5bdc045d16f89df4b48"
                },
                {
                    name: "Página de Destino do Produto",
                    id: "product-landing-page",
                    hash: "0212803ee6f961b0c42b5d402fa55246"
                },
                {
                    name: "Máquina de Ritmos",
                    id: "drum-machine",
                    hash: "717d06318160bff54f6157868a8143e1"
                }
            ]
        },
        "html-css-websites": {
            setName: "SITES HTML & CSS",
            setOptions: [
                {
                    name: "Página de Homenagem",
                    id: "tribute-page",
                    hash: "f7e689a5dd32254c6e98a3315175f3ee"
                },
                {
                    name: "Página de Pesquisa",
                    id: "survey-page",
                    hash: "71e777f3f65f01abd5f5b6d3abd3c0cc"
                },
                {
                    name: "Página de Destino do Produto",
                    id: "product-landing-page",
                    hash: "0212803ee6f961b0c42b5d402fa55246"
                },
                {
                    name: "Página de Documentação Técnica",
                    id: "technical-documentation-page",
                    hash: "e786fa32f366ec88ebe33ea2c81740b3"
                },
                {
                    name: "Portfólio Pessoal",
                    id: "personal-portfolio-page",
                    hash: "4d0d037f456542c52042b20507dbaa09"
                }
            ]
        },
        "single-page-apps": {
            setName: "APPS DE PÁGINA ÚNICA",
            setOptions: [
                {
                    name: "Máquina de Citações Aleatórias",
                    id: "random-quote-machine",
                    hash: "166f6abef74056d74e89fa20d5f6c793"
                },
                {
                    name: "Visualizador de Markdown",
                    id: "markdown-previewer",
                    hash: "0e9d930c3fa180109b36feb106df0b88"
                },
                {
                    name: "Máquina de Ritmos",
                    id: "drum-machine",
                    hash: "717d06318160bff54f6157868a8143e1"
                },
                {
                    name: "Calculadora Javascript",
                    id: "javascript-calculator",
                    hash: "37ec9bf97988ab7a569b607767c1d668"
                },
                {
                    name: "Cronômetro Pomodoro",
                    id: "pomodoro-clock",
                    hash: "9365886184452fafbaf4c97d5fcd01dc"
                }
            ]
        },
        "d3js-charts": {
            setName: "GRÁFICOS COM D3.JS",
            setOptions: [
                {
                    name: "Gráfico de Barras",
                    id: "bar-chart",
                    hash: "ca278665a027659ed878e8787a01cd57"
                },
                {
                    name: "Gráfico de Dispersão",
                    id: "scatterplot-graph",
                    hash: "e0d4194c9f5673d3a8abe5741a0af908"
                },
                {
                    name: "Mapa de Calor",
                    id: "heat-map",
                    hash: "560001881376e5e26ebd4032cdd48516"
                },
                {
                    name: "Mapa Coroplético",
                    id: "choropleth-map",
                    hash: "4334c1b2f60cdf07892e8850bf6e4131"
                },
                {
                    name: "Mapa de Árvore",
                    id: "treemap-diagram",
                    hash: "b309935e07b6635fb4aa223962194f13"
                }
            ]
        },
        "full-stack-web-apps": {
            setName: "APLICATIVOS FULL-STACK",
            setOptions: [
                {
                    name: "Timely",
                    id: "timely",
                    hash: "3aa9dc55f225e35a57cd28d5795370a4"
                },
                {
                    name: "HeadParser",
                    id: "headparser",
                    hash: "e8ba500a7c1c3ff91e08215ef396d0d7"
                },
                {
                    name: "Shortr",
                    id: "shortr",
                    hash: "461d81e54ed7f5bdc045d16f89df4b48"
                },
                {
                    name: "XTrack",
                    id: "xtrack",
                    hash: "d3f1772e9f5db35f3e3a923c30adb477"
                },
                {
                    name: "Metareader",
                    id: "metareader",
                    hash: "154eb4e1e0be623ea6067490919d78d0"
                }
            ]
        },
        "template-set": {
            setName: "Template Set",
            setOptions: [{ name: "", id: "", hash: "", type: "" }]
        }
    }
    const setOptions = sets[props.set].setOptions.map(value => (
        <button
            key={value.hash}
            id={value.id}
            onClick={props.change}
            onMouseOver={props.preview}
            onMouseOut={props.preview}
            className={
                props.selected === value.id
                    ? "display-option sel"
                    : "display-option"
            }
        >
            {value.name}
        </button>
    ))
    return (
        <div className="display-menu-box">
            <div className="display-menu">
                <h3 className="menu-title">{sets[props.set].setName}</h3>
                <hr className="menu-break" />
                {setOptions}
            </div>
        </div>
    )
}

export default DisplayMenu
