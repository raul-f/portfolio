import React from "react"

const DisplayProject = props => {
    const sets = {
        "random-quote-machine": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/random-quote-machine.png",
            description: {
                "en-US":
                    "A simple, single page application that lets you randomly raffle quotes curated by me and tweet them if you like.",
                "pt-BR":
                    "Uma aplicação simples que permite ao usuário sortear frases curadas por mim e tuitá-las."
            },
            link: "https://codepen.io/raul-f/full/JeZEwe",
            repoLink: "",
            type: "frontend"
        },
        "pomodoro-clock": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/pomodoro-clock.png",
            description: {
                "en-US":
                    "An app that allows you to easily manage your time using the Pomodoro Technique.",
                "pt-BR":
                    "Um aplicativo que permite o gerenciamento de tempo atráves da Técnica Pomodoro."
            },
            link: "https://codepen.io/raul-f/full/rQXbxz",
            repoLink: "",
            type: "frontend"
        },
        shortr: {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/placeholder.png",
            description: {
                "en-US":
                    "The API is in place, but the interface is pending. Check the github repo!",
                "pt-BR":
                    "A API está funcionando, mas a página ainda está pendente. Veja o repositório no Github!"
            },
            link: "",
            repoLink: "https://github.com/raul-f/shortr",
            type: "fullstack"
        },
        "product-landing-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/product-landing-page.png",
            description: {
                "en-US":
                    "A promotional page for a product, with an explanatory video, its features and pricing options",
                "pt-BR":
                    "Uma página promocional para um produto, com um vídeo explanatório, suas características e opções de preço."
            },
            link: "https://codepen.io/raul-f/full/PxoVBv",
            repoLink: "",
            type: "frontend"
        },
        "drum-machine": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/drum-machine.png",
            description: {
                "en-US":
                    "An application that imitates some of the functionalities of a drum machine.",
                "pt-BR":
                    "Uma aplicação que imita algumas das funcionalidades de uma máquina de ritmos."
            },
            link: "https://codepen.io/raul-f/full/GwzbLm",
            repoLink: "",
            type: "frontend"
        },
        "javascript-calculator": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/javascript-calculator.png",
            description: {
                "en-US": "An online calculator, built with JavaScript e React",
                "pt-BR":
                    "Uma calculadora online, construída com JavaScript e React."
            },
            link: "https://codepen.io/raul-f/full/wQbpWJ",
            repoLink: "",
            type: "frontend"
        },
        "markdown-previewer": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/markdown-previewer-v1.png",
            description: {
                "en-US":
                    "An application that allows the preview of Github-flavored markdown",
                "pt-BR":
                    "Uma aplicação que permite a visualização de markdown escrito no estilo do Github."
            },
            link: "https://codepen.io/raul-f/full/QJVqQV",
            repoLink: "",
            type: "frontend"
        },
        "tribute-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/tribute-page.png",
            description: {
                "en-US": "A page built to pay honors to Rosalind Franklin.",
                "pt-BR":
                    "Uma página construída para homenagear Rosalind Franklin."
            },
            link: "https://codepen.io/raul-f/full/PyrVWq",
            repoLink: "",
            type: "frontend"
        },
        "survey-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/survey-page.png",
            description: {
                "en-US": "A page that collects a wide range of user data.",
                "pt-BR":
                    "Uma página que coleta uma ampla gama de dados do usuário."
            },
            link: "https://codepen.io/raul-f/full/gBVJNP",
            repoLink: "",
            type: "frontend"
        },
        "technical-documentation-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/technical-documentation-page.png",
            description: {
                "en-US": "A short technical documentation of JavaScript.",
                "pt-BR": "Uma curta documentação técnica de JavaScript."
            },
            link: "https://codepen.io/raul-f/full/bQdGNb",
            repoLink: "",
            type: "frontend"
        },
        "personal-portfolio-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/personal-portfolio-page.png",
            description: {
                "en-US": "A previous version of this page.",
                "pt-BR": "A versão anterior desta página."
            },
            link: "https://oldraul-f.glitch.me/",
            repoLink: "",
            type: "frontend"
        },
        "bar-chart": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/bar-chart.png",
            description: {
                "en-US":
                    "An interactive chart representing the magnitude of the US GDP from 1947 to late 2015.",
                "pt-BR":
                    "Um gráfico interativo que representa a magnitude do PIB dos EUA desde 1947 até o fim de 2015."
            },
            link: "https://codepen.io/raul-f/full/oJNXWK",
            repoLink: "",
            type: "frontend"
        },
        "scatterplot-graph": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/scatterplot-graph.png",
            description: {
                "en-US":
                    "An interactive graph representing the completion times and doping status of Tour de France competitors.",
                "pt-BR":
                    "Um gráfico interativo que representa os tempos de prova e status de doping de competidores do Tour de France."
            },
            link: "https://codepen.io/raul-f/full/GPgvKx",
            repoLink: "",
            type: "frontend"
        },
        "heat-map": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/heat-map.png",
            description: {
                "en-US":
                    "A heat map that displays which was the average temperature of the Earth every month from 1753 to 2015.",
                "pt-BR":
                    "Um gráfico que mostra qual foi a temperatura média da Terra todos os meses desde 1753 até 2015."
            },
            link: "https://codepen.io/raul-f/full/MZYBmz",
            repoLink: "",
            type: "frontend"
        },
        "choropleth-map": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/choropleth-map.png",
            description: {
                "en-US":
                    "An interactive map that displays the percentage of college graduates for every US county.",
                "pt-BR":
                    "Um mapa interativo que mostra a porcentagem de cidadãos graduados para cada um dos condados dos EUA."
            },
            link: "https://codepen.io/raul-f/full/jXWbgz",
            repoLink: "",
            type: "frontend"
        },
        "treemap-diagram": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/treemap-diagram.png",
            description: {
                "en-US":
                    "A diagram that displays the highest-grossing movies of US cinema.",
                "pt-BR":
                    "Um diagram que mostra os filmes dos EUA que mais arrecadaram."
            },
            link: "https://codepen.io/raul-f/full/VqjdxW",
            repoLink: "",
            type: "frontend"
        },
        timely: {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/placeholder.png",
            description: {
                "en-US":
                    "The API is in place, but the interface is pending. Check the github repo!",
                "pt-BR":
                    "A API está funcionando, mas a página ainda está pendente. Veja o repositório no Github!"
            },
            link: "",
            repoLink: "https://github.com/raul-f/timely",
            type: "fullstack"
        },
        headparser: {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/placeholder.png",
            description: {
                "en-US":
                    "The API is in place, but the interface is pending. Check the github repo!",
                "pt-BR":
                    "A API está funcionando, mas a página ainda está pendente. Veja o repositório no Github!"
            },
            link: "",
            repoLink: "https://github.com/raul-f/headparser",
            type: "fullstack"
        },
        xtrack: {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/placeholder.png",
            description: {
                "en-US":
                    "The API is in place, but the interface is pending. Check the github repo!",
                "pt-BR":
                    "A API está funcionando, mas a página ainda está pendente. Veja o repositório no Github!"
            },
            link: "",
            repoLink: "https://github.com/raul-f/xtrack",
            type: "fullstack"
        },
        metareader: {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/placeholder.png",
            description: {
                "en-US":
                    "The API is in place, but the interface is pending. Check the github repo!",
                "pt-BR":
                    "A API está funcionando, mas a página ainda está pendente. Veja o repositório no Github!"
            },
            link: "",
            repoLink: "https://github.com/raul-f/metareader",
            type: "fullstack"
        },
        template: {
            screenshotUrl: "",
            description: { "en-US": "", "pt-BR": "" },
            link: "",
            repoLink: "",
            type: ""
        }
    }
    return (
        <div className="display-content-box">
            <div className="display-content">
                <a
                    href={
                        sets[props.active].link
                            ? sets[props.active].link
                            : sets[props.active].repoLink
                            ? sets[props.active].repoLink
                            : null
                    }
                    target="_blank"
                >
                    <img
                        src={sets[props.active].screenshotUrl}
                        alt="A screenshot of the selected project."
                        className="display-screenshot"
                    />
                </a>
                <p className="display-info">
                    {sets[props.active].description[props.language]}
                </p>
                <div className="display-link-box">
                    <a
                        href={
                            sets[props.active].link
                                ? sets[props.active].link
                                : null
                        }
                        target="_blank"
                        className="display-pageLink"
                    >
                        {props.language === "pt-BR"
                            ? "Veja ao vivo "
                            : "Go see it live "}
                        <i className="fas fa-chevron-right" />
                    </a>
                    {sets[props.active].type === "fullstack" && (
                        <a
                            href={sets[props.active].repoLink}
                            target="_blank"
                            className="display-repoLink"
                        >
                            {props.language === "pt-BR"
                                ? "Veja no Github "
                                : "Check the repo "}
                            <i className="fas fa-chevron-right" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DisplayProject
