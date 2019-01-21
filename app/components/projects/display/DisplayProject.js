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
            description: "",
            link: "",
            repoLink: "",
            type: "fullstack"
        },
        "product-landing-page": {
            screenshotUrl: "",
            description: "",
            link: "",
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
            type: ""
        },
        "markdown-previewer": {
            screenshotUrl:
                "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Images/portfolioscreenshots/markdown-previewer.png",
            description: "",
            link: "https://codepen.io/raul-f/full/QJVqQV",
            repoLink: "",
            type: ""
        },
        template: {
            screenshotUrl: "",
            description: "",
            link: "",
            repoLink: "",
            type: ""
        },
        template: {
            screenshotUrl: "",
            description: "",
            link: "",
            repoLink: "",
            type: ""
        },
        template: {
            screenshotUrl: "",
            description: "",
            link: "",
            repoLink: "",
            type: ""
        },
        template: {
            screenshotUrl: "",
            description: "",
            link: "",
            repoLink: "",
            type: ""
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
