import React from "react"
import anime from "animejs"

import Navbar from "./Navbar"
import LinkBox from "./LinkBox"
import Logo from "./Logo"
import Filter from "./projects/Filter"
import Display from "./projects/Display"
import ScrollBtn from "./projects/ScrollBtn"
import Watermark from "./Watermark"
import MobileMenu from "./MobileMenu"

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
        if (!this.state.animating) {
            if (window.pageYOffset === window.innerHeight) {
                window.scrollTo({ top: 0, behavior: "smooth" })
            } else {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                })
            }
            this.setState(
                {
                    rotate: this.state.rotate + 180,
                    animating: true
                },
                () => {
                    anime({
                        ...this.state.settings,
                        rotate: this.state.rotate
                    }).finished.then(() => {
                        this.setState({ animating: false })
                    })
                }
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
                    anime({
                        ...this.state.settings,
                        rotate: this.state.rotate
                    }).finished.then(() => this.setState({ animating: false }))
                }
            )
        } else if (
            window.pageYOffset === window.innerHeight &&
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
                    anime({
                        ...this.state.settings,
                        rotate: this.state.rotate
                    }).finished.then(() => this.setState({ animating: false }))
                }
            )
        }
    }

    componentDidMount() {
        document.addEventListener("wheel", this.handleScrolling)
        if (window.pageYOffset < 100) {
            window.scrollTo({ top: 0, behavior: "auto" })
        } else {
            window.scrollTo({ top: window.innerHeight, behavior: "auto" })
            this.setState({
                rotate: this.state.rotate + 180,
                style: { transform: "rotate(180deg)" }
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener("wheel", this.handleScrolling)
    }

    render() {
        return (
            <div id="projects" className="projects">
                <div className="projects-background" />
                <MobileMenu language={this.props.language} />
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
                <div className="mobile-footer" />
            </div>
        )
    }
}

export default Projects
