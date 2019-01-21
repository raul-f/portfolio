import React from "react"
import anime from "animejs"

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
            rotation: 0,
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
            console.log(this.state.animating)
            anime({
                targets: ".scroll-btn",
                rotate: this.state.rotation + 180,
                easing: "easeInOutCubic",
                duration: 300
            })
            this.setState({
                rotation: this.state.rotation + 180,
                animating: true
            })
            console.log(this.state.animating)
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                500
            )
        } else if (!this.state.animating) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })
            anime({
                targets: ".scroll-btn",
                rotate: this.state.rotation + 180,
                easing: "easeInOutCubic",
                duration: 300
            })
            this.setState({
                rotation: this.state.rotation + 180,
                animating: true
            })
            console.log(this.state.animating)
            setTimeout(
                function() {
                    this.setState({ animating: false })
                }.bind(this),
                500
            )
        }
    }

    handleScrolling = event => {
        event.preventDefault()
        console.log(event.deltaY)
        if (
            event.deltaY > 0 &&
            window.pageYOffset === 0 &&
            !this.state.animating
        ) {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            if (!this.state.animating) {
                anime({
                    targets: ".scroll-btn",
                    rotate: this.state.rotation + 180,
                    easing: "easeInOutCubic",
                    duration: 300
                })
                this.setState({
                    rotation: this.state.rotation + 180,
                    animating: true
                })
                console.log(this.state.animating)
                setTimeout(
                    function() {
                        this.setState({ animating: false })
                    }.bind(this),
                    500
                )
            }
        } else if (
            window.pageYOffset > 0 &&
            event.deltaY < 0 &&
            !this.state.animating
        ) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            if (!this.state.animating) {
                anime({
                    targets: ".scroll-btn",
                    rotate: this.state.rotation + 180,
                    easing: "easeInOutCubic",
                    duration: 300
                })
                this.setState({
                    rotation: this.state.rotation + 180,
                    animating: true
                })
                console.log(this.state.animating)
                setTimeout(
                    function() {
                        this.setState({ animating: false })
                    }.bind(this),
                    500
                )
            }
        }
    }

    componentDidMount() {
        document.addEventListener("wheel", this.handleScrolling)
        if (window.pageYOffset === window.innerHeight) {
            this.setState({
                rotation: 180,
                style: { transform: "rotate(180deg)" }
            })
        }
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
                    style={this.state.style}
                />
                <Watermark />
                <LinkBox />
            </div>
        )
    }
}

export default Projects
