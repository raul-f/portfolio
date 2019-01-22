import React from "react"

const DisplayProject = props => {
    const sets = {
        "random-quote-machine": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/random-quote-machine.png",
            description:
                "A simple, single page application that lets you randomly raffle quotes curated by me and tweet them if you like.",
            link: "https://codepen.io/raul-f/full/JeZEwe",
            repoLink: "",
            type: "frontend"
        },
        "pomodoro-clock": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/pomodoro-clock.png",
            description: "",
            link: "https://codepen.io/raul-f/full/rQXbxz",
            repoLink: "",
            type: "frontend"
        },
        shortr: {
            screenshotUrl: "",
            description:
                "The API is in place, but the interface is pending. Check the github repo!",
            link: "",
            repoLink: "https://github.com/raul-f/shortr",
            type: "fullstack"
        },
        "product-landing-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/product-landing-page.png",
            description: "",
            link: "https://codepen.io/raul-f/full/PxoVBv",
            repoLink: "",
            type: "frontend"
        },
        "drum-machine": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/drum-machine.png",
            description: "",
            link: "https://codepen.io/raul-f/full/GwzbLm",
            repoLink: "",
            type: "frontend"
        },
        "javascript-calculator": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/javascript-calculator.png",
            description: "",
            link: "https://codepen.io/raul-f/full/wQbpWJ",
            repoLink: "",
            type: "frontend"
        },
        "markdown-previewer": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/markdown-previewer-v1.png",
            description: "",
            link: "https://codepen.io/raul-f/full/QJVqQV",
            repoLink: "",
            type: "frontend"
        },
        "tribute-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/tribute-page.png",
            description: "",
            link: "https://codepen.io/raul-f/full/PyrVWq",
            repoLink: "",
            type: "frontend"
        },
        "survey-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/survey-page.png",
            description: "",
            link: "https://codepen.io/raul-f/full/gBVJNP",
            repoLink: "",
            type: "frontend"
        },
        "technical-documentation-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/technical-documentation-page.png",
            description: "",
            link: "https://codepen.io/raul-f/full/bQdGNb",
            repoLink: "",
            type: "frontend"
        },
        "personal-portfolio-page": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/personal-portfolio-page.png",
            description: "",
            link: "https://raul-f.glitch.me/",
            repoLink: "",
            type: "frontend"
        },
        "bar-chart": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/bar-chart.png",
            description: "",
            link: "https://codepen.io/raul-f/full/oJNXWK",
            repoLink: "",
            type: "frontend"
        },
        "scatterplot-graph": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/scatterplot-graph.png",
            description: "",
            link: "https://codepen.io/raul-f/full/GPgvKx",
            repoLink: "",
            type: "frontend"
        },
        "heat-map": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/heat-map.png",
            description: "",
            link: "https://codepen.io/raul-f/full/MZYBmz",
            repoLink: "",
            type: "frontend"
        },
        "choropleth-map": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/choropleth-map.png",
            description: "",
            link: "https://codepen.io/raul-f/full/jXWbgz",
            repoLink: "",
            type: "frontend"
        },
        "treemap-diagram": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/treemap-diagram.png",
            description: "",
            link: "https://codepen.io/raul-f/full/VqjdxW",
            repoLink: "",
            type: "frontend"
        },
        timely: {
            screenshotUrl: "",
            description:
                "The API is in place, but the interface is pending. Check the github repo!",
            link: "",
            repoLink: "https://github.com/raul-f/timely",
            type: "fullstack"
        },
        headparser: {
            screenshotUrl: "",
            description:
                "The API is in place, but the interface is pending. Check the github repo!",
            link: "",
            repoLink: "https://github.com/raul-f/headparser",
            type: "fullstack"
        },
        xtrack: {
            screenshotUrl: "",
            description:
                "The API is in place, but the interface is pending. Check the github repo!",
            link: "",
            repoLink: "https://github.com/raul-f/xtrack",
            type: "fullstack"
        },
        metareader: {
            screenshotUrl: "",
            description:
                "The API is in place, but the interface is pending. Check the github repo!",
            link: "",
            repoLink: "https://github.com/raul-f/metareader",
            type: "fullstack"
        },
        template: {
            screenshotUrl: "",
            description: "",
            link: "",
            repoLink: "",
            type: ""
        }
    }
    return (
        <div className="display-content-box">
            <div className="display-content">
                <a href={sets[props.active].link} target="_blank">
                    <img
                        src={sets[props.active].screenshotUrl}
                        alt="A screenshot of the selected project."
                        className="display-screenshot"
                    />
                </a>
                <p className="display-info">{sets[props.active].description}</p>
                <div className="display-link-box">
                    <a
                        href={sets[props.active].link}
                        target="_blank"
                        className="display-pageLink"
                    >
                        Go see it live <i className="fas fa-chevron-right" />
                    </a>
                    {sets[props.active].type === "fullstack" && (
                        <a
                            href={sets[props.active].repoLink}
                            target="_blank"
                            className="display-repoLink"
                        >
                            Check the repo{" "}
                            <i className="fas fa-chevron-right" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DisplayProject
