import React from "react"
import anime from "animejs"

import Logo from "./Logo"
import Navbox from "./mobilemenu/Navbox"
import LinkBox from "./LinkBox"

class MobileMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            animating: false
        }
    }

    toggleMenu = () => {
        if (!this.state.animating) {
            this.setState({ animating: true })
            if (this.state.open) {
                anime({
                    targets: ".mobile-menu",
                    height: 100,
                    easing: "easeInOutQuart",
                    duration: 300
                }).finished.then(() => {
                    this.setState({ animating: false })
                })
            } else {
                anime({
                    targets: ".mobile-menu",
                    height: window.innerHeight,
                    easing: "easeInOutQuart",
                    duration: 300
                }).finished.then(() => {
                    this.setState({ animating: false })
                })
            }
            this.setState({ open: !this.state.open })
        }
    }

    render() {
        return (
            <div id="mobile-menu" className="mobile-menu">
                <Logo />
                <button className="menu-btn" onClick={this.toggleMenu}>
                    {this.state.open ? (
                        <i className="fas fa-times" />
                    ) : (
                        <i className="fas fa-bars" />
                    )}
                </button>
                <Navbox language={this.props.language} />
                <LinkBox />
            </div>
        )
    }
}

export default MobileMenu
