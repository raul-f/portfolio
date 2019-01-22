import React from "react"
import anime from "animejs"

import Navbar from "./projetos/Navbar"
import LinkBox from "./projetos/LinkBox"
import Logo from "./projetos/Logo"
import Filter from "./projetos/Filter"
import Display from "./projetos/Display"
import ScrollBtn from "./projetos/ScrollBtn"
import Watermark from "./projetos/Watermark"

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
                rotate: 0,
                easing: "easeInOutCubic",
                duration: 450
            },
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
                prev => ({
                    settings: {
                        ...prev.settings,
                        rotate: this.state.settings.rotate + 180
                    },
                    animating: true
                }),
                () => {
                    anime(this.state.settings)
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
                prev => ({
                    settings: {
                        ...prev.settings,
                        rotate: this.state.settings.rotate + 180
                    },
                    animating: true
                }),
                () => {
                    anime(this.state.settings)
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
            console.log(this.state.settings.rotate)
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            this.setState(
                prev => ({
                    settings: {
                        ...prev.settings,
                        rotate: this.state.settings.rotate + 180
                    },
                    animating: true
                }),
                () => {
                    anime(this.state.settings)
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
            console.log(this.state.settings.rotate)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            this.setState(
                prev => ({
                    settings: {
                        ...prev.settings,
                        rotate: this.state.settings.rotate + 180
                    },
                    animating: true
                }),
                () => {
                    anime(this.state.settings)
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
            this.setState(prev => ({
                settings: {
                    ...prev.settings,
                    rotate: this.state.settings.rotate + 180
                },
                style: { transform: "rotate(180deg)" }
            }))
        }
    }

    render() {
        return (
            <div className="projects">
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
