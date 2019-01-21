import React from "react"

import Navbar from "./projects/Navbar"
import LinkBox from "./projects/LinkBox"
import Logo from "./projects/Logo"
import Filter from "./projects/Filter"
import Display from "./projects/Display"
import ScrollBtn from "./projects/ScrollBtn"
import Watermark from "./projects/Watermark"

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSet: "personal-picks",
            activeSet: "personal-picks",
            selectedProject: "random-quote-machine",
            activeProject: "random-quote-machine",
            scrollBtnStyle: { transform: "rotate(0deg)" }
        }
    }

    handleFilterSelection = event => {
        const initProjects = {
            "personal-picks": "random-quote-machine",
            "html-css-websites": "tribute-page",
            "single-page-apps": "random-quote-machine",
            "d3js-charts": "bar-chart",
            "full-stack-web-apps": "timely"
        }
        this.setState({
            selectedSet: event.target.id,
            activeSet: event.target.id,
            selectedProject: initProjects[event.target.id],
            activeProject: initProjects[event.target.id]
        })
    }

    handleFilterPreview = event => {
        switch (event.type) {
            case "mouseover":
                this.setState({ activeSet: event.target.id })
                break
            default:
                this.setState({ activeSet: this.state.selectedSet })
                break
        }
    }

    handleDisplaySelection = event => {
        this.setState({
            selectedProject: event.target.id,
            activeProject: event.target.id
        })
    }

    handleDisplayPreview = event => {
        switch (event.type) {
            case "mouseover":
                this.setState({ activeProject: event.target.id })
                break
            default:
                this.setState({ activeProject: this.state.selectedProject })
                break
        }
    }

    handleScrollBtn = () => {
        // console.log(`The window's inner height is ${window.innerHeight}`)
        // console.log(`The window's outer height is ${window.outerHeight}`)
        //console.log( `The window's Y page offset was ${ window.pageYOffset} when the button was clicked` )
        if (window.pageYOffset > window.innerHeight / 1.25) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            this.setState({ scrollBtnStyle: { transform: "rotate(0deg)" } })
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })
            this.setState({ scrollBtnStyle: { transform: "rotate(180deg)" } })
        }
    }

    handleScrolling = event => {
        console.log(event)
        event.preventDefault()
        if (event.deltaY > 0) {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            this.setState({ scrollBtnStyle: { transform: "rotate(180deg)" } })
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            this.setState({ scrollBtnStyle: { transform: "rotate(0deg)" } })
        }
    }

    componentDidMount() {
        document.addEventListener("wheel", this.handleScrolling)
    }

    render() {
        return (
            <div id="projects">
                <div className="projects-background" />
                <Logo />
                <Navbar />
                <div className="content">
                    <Filter
                        selected={this.state.selectedSet}
                        active={this.state.activeSet}
                        changeFilter={this.handleFilterSelection}
                        previewFilter={this.handleFilterPreview}
                    />
                    <Display
                        set={this.state.selectedSet}
                        selected={this.state.selectedProject}
                        active={this.state.activeProject}
                        changeProject={this.handleDisplaySelection}
                        previewProject={this.handleDisplayPreview}
                    />
                </div>
                <ScrollBtn
                    update={this.handleScrollBtn}
                    style={this.state.scrollBtnStyle}
                />
                <Watermark />
                <LinkBox />
            </div>
        )
    }
}

export default Projects
