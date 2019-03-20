import React from "react"

const DisplayMenu = props => {
    const sets = {
        "personal-picks": {
            setName: { "en-US": "PERSONAL PICKS", "pt-BR": "DESTAQUES" },
            setOptions: [
                {
                    name: { "en-US": "Shortr", "pt-BR": "Shortr" },
                    id: "shortr",
                    hash: "461d81e54ed7f5bdc045d16f89df4b48"
                },
                {
                    name: {
                        "en-US": "Pomodoro Clock",
                        "pt-BR": "Cronômetro Pomodoro"
                    },
                    id: "pomodoro-clock",
                    hash: "9365886184452fafbaf4c97d5fcd01dc"
                },
                {
                    name: {
                        "en-US": "Random Quote Machine",
                        "pt-BR": "Máquina de Citações Aleatórias"
                    },
                    id: "random-quote-machine",
                    hash: "166f6abef74056d74e89fa20d5f6c793"
                },
                {
                    name: {
                        "en-US": "Product-Landing Page",
                        "pt-BR": "Página de Destino do Produto"
                    },
                    id: "product-landing-page",
                    hash: "0212803ee6f961b0c42b5d402fa55246"
                },
                {
                    name: {
                        "en-US": "Drum Machine",
                        "pt-BR": "Máquina de Ritmos"
                    },
                    id: "drum-machine",
                    hash: "717d06318160bff54f6157868a8143e1"
                }
            ]
        },
        "html-css-websites": {
            setName: {
                "en-US": "HTML & CSS WEBSITES",
                "pt-BR": "SITES HTML & CSS"
            },
            setOptions: [
                {
                    name: {
                        "en-US": "Tribute Page",
                        "pt-BR": "Página de Homenagem"
                    },
                    id: "tribute-page",
                    hash: "f7e689a5dd32254c6e98a3315175f3ee"
                },
                {
                    name: {
                        "en-US": "Survey Page",
                        "pt-BR": "Página de Pesquisa"
                    },
                    id: "survey-page",
                    hash: "71e777f3f65f01abd5f5b6d3abd3c0cc"
                },
                {
                    name: {
                        "en-US": "Product-Landing Page",
                        "pt-BR": "Página de Destino do Produto"
                    },
                    id: "product-landing-page",
                    hash: "0212803ee6f961b0c42b5d402fa55246"
                },
                {
                    name: {
                        "en-US": "Technical Documentation Page",
                        "pt-BR": "Página de Documentação Técnica"
                    },
                    id: "technical-documentation-page",
                    hash: "e786fa32f366ec88ebe33ea2c81740b3"
                },
                {
                    name: {
                        "en-US": "Personal Portfolio Page",
                        "pt-BR": "Portfólio Pessoal"
                    },
                    id: "personal-portfolio-page",
                    hash: "4d0d037f456542c52042b20507dbaa09"
                }
            ]
        },
        "single-page-apps": {
            setName: {
                "en-US": "SINGLE PAGE APPS",
                "pt-BR": "APPS DE PÁGINA ÚNICA"
            },
            setOptions: [
                {
                    name: {
                        "en-US": "Random Quote Machine",
                        "pt-BR": "Máquina de Citações Aleatórias"
                    },
                    id: "random-quote-machine",
                    hash: "166f6abef74056d74e89fa20d5f6c793"
                },
                {
                    name: {
                        "en-US": "Markdown Previewer",
                        "pt-BR": "Visualizador de Markdown"
                    },
                    id: "markdown-previewer",
                    hash: "0e9d930c3fa180109b36feb106df0b88"
                },
                {
                    name: {
                        "en-US": "Drum Machine",
                        "pt-BR": "Máquina de Ritmos"
                    },
                    id: "drum-machine",
                    hash: "717d06318160bff54f6157868a8143e1"
                },
                {
                    name: {
                        "en-US": "Javascript Calculator",
                        "pt-BR": "Calculadora Javascript"
                    },
                    id: "javascript-calculator",
                    hash: "37ec9bf97988ab7a569b607767c1d668"
                },
                {
                    name: {
                        "en-US": "Pomodoro Clock",
                        "pt-BR": "Cronômetro Pomodoro"
                    },
                    id: "pomodoro-clock",
                    hash: "9365886184452fafbaf4c97d5fcd01dc"
                }
            ]
        },
        "d3js-charts": {
            setName: { "en-US": "D3.JS CHARTS", "pt-BR": "GRÁFICOS COM D3.JS" },
            setOptions: [
                {
                    name: {
                        "en-US": "Bar Chart",
                        "pt-BR": "Gráfico de Barras"
                    },
                    id: "bar-chart",
                    hash: "ca278665a027659ed878e8787a01cd57"
                },
                {
                    name: {
                        "en-US": "Scatterplot Graph",
                        "pt-BR": "Gráfico de Dispersão"
                    },
                    id: "scatterplot-graph",
                    hash: "e0d4194c9f5673d3a8abe5741a0af908"
                },
                {
                    name: { "en-US": "Heat Map", "pt-BR": "Mapa de Calor" },
                    id: "heat-map",
                    hash: "560001881376e5e26ebd4032cdd48516"
                },
                {
                    name: {
                        "en-US": "Choropleth Map",
                        "pt-BR": "Mapa Coroplético"
                    },
                    id: "choropleth-map",
                    hash: "4334c1b2f60cdf07892e8850bf6e4131"
                },
                {
                    name: {
                        "en-US": "Treemap Diagram",
                        "pt-BR": "Mapa de Árvore"
                    },
                    id: "treemap-diagram",
                    hash: "b309935e07b6635fb4aa223962194f13"
                }
            ]
        },
        "full-stack-web-apps": {
            setName: {
                "en-US": "FULL-STACK WEB APPS",
                "pt-BR": "APLICATIVOS FULL-STACK"
            },
            setOptions: [
                {
                    name: { "en-US": "Shortr", "pt-BR": "Shortr" },
                    id: "shortr",
                    hash: "461d81e54ed7f5bdc045d16f89df4b48"
                },
                {
                    name: { "en-US": "XTrack", "pt-BR": "XTrack" },
                    id: "xtrack",
                    hash: "d3f1772e9f5db35f3e3a923c30adb477"
                }
            ]
        },
        microservices: {
            setName: { "en-US": "MICROSERVICES", "pt-BR": "MICROSSERVIÇOS" },
            setOptions: [
                {
                    name: { "en-US": "Timely", "pt-BR": "Timely" },
                    id: "timely",
                    hash: "3aa9dc55f225e35a57cd28d5795370a4"
                },
                {
                    name: { "en-US": "HeadParser", "pt-BR": "HeadParser" },
                    id: "headparser",
                    hash: "e8ba500a7c1c3ff91e08215ef396d0d7"
                },
                {
                    name: { "en-US": "Metareader", "pt-BR": "Metareader" },
                    id: "metareader",
                    hash: "154eb4e1e0be623ea6067490919d78d0"
                }
            ]
        },
        "template-set": {
            setName: { "en-US": "", "pt-BR": "" },
            setOptions: [
                {
                    name: { "en-US": "", "pt-BR": "" },
                    id: "",
                    hash: ""
                }
            ]
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
            {value.name[props.language]}
        </button>
    ))
    return (
        <div className="display-menu-box">
            <div className="display-menu">
                <h3 className="menu-title">
                    {sets[props.set].setName[props.language]}
                </h3>
                <hr className="menu-break" />
                {setOptions}
            </div>
        </div>
    )
}

export default DisplayMenu
