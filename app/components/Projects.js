import React from "react"
import anime from "animejs"

import Navbar from "./Navbar"
import LinkBox from "./LinkBox"
import Logo from "./Logo"
import Filter from "./projects/Filter"
import Display from "./projects/Display"
import ScrollBtn from "./projects/ScrollBtn"
import Watermark from "./Watermark"

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSet: "personal-picks",
            activeSet: "personal-picks",
            selectedProject: "random-quote-machine",
            activeProject: "random-quote-machine",
            settings: {
                targets: ".scroll-btn",
                easing: "easeInOutCubic",
                duration: 450
            },
            rotate: 0,
            style: { transform: "rotate(0deg)" },
            animating: false
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
        if (
            window.pageYOffset > window.innerHeight / 1.25 &&
            !this.state.animating
        ) {
            window.scrollTo({ top: 0, behavior: "smooth" })
            this.setState(
                {
                    rotate: this.state.rotate + 180,
                    animating: true
                },
                () => {
                    anime({ ...this.state.settings, rotate: this.state.rotate })
                }
            )
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                450
            )
        } else if (!this.state.animating) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })
            this.setState(
                {
                    rotate: this.state.rotate + 180,
                    animating: true
                },
                () => {
                    anime({ ...this.state.settings, rotate: this.state.rotate })
                }
            )
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                450
            )
        }
    }

    handleScrolling = event => {
        event.preventDefault()
        if (
            event.deltaY > 0 &&
            window.pageYOffset === 0 &&
            !this.state.animating
        ) {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            this.setState(
                {
                    rotate: this.state.rotate + 180,
                    animating: true
                },
                () => {
                    anime({ ...this.state.settings, rotate: this.state.rotate })
                }
            )
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                450
            )
        } else if (
            window.pageYOffset > 0 &&
            event.deltaY < 0 &&
            !this.state.animating
        ) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            this.setState(
                {
                    rotate: this.state.rotate + 180,
                    animating: true
                },
                () => {
                    anime({ ...this.state.settings, rotate: this.state.rotate })
                }
            )
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                450
            )
        }
    }

    componentDidMount() {
        document.addEventListener("wheel", this.handleScrolling)
        if (window.pageYOffset === window.innerHeight) {
            this.setState({
                rotate: this.state.rotate + 180,
                style: { transform: "rotate(180deg)" }
            })
        }
    }

    render() {
        //console.log(this.props.language)
        return (
            <div className="projects">
                <div className="projects-background" />
                <Logo />
                <Navbar language={this.props.language} />
                <div className="content">
                    <Filter
                        selected={this.state.selectedSet}
                        active={this.state.activeSet}
                        changeFilter={this.handleFilterSelection}
                        previewFilter={this.handleFilterPreview}
                        language={this.props.language}
                    />
                    <Display
                        set={this.state.selectedSet}
                        selected={this.state.selectedProject}
                        active={this.state.activeProject}
                        changeProject={this.handleDisplaySelection}
                        previewProject={this.handleDisplayPreview}
                        language={this.props.language}
                    />
                </div>
                <ScrollBtn
                    update={this.handleScrollBtn}
                    style={this.state.style}
                />
                <Watermark language={this.props.language} page="projects" />
                <LinkBox />
            </div>
        )
    }
}

export default Projects
