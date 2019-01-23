import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

require("./style.css")
import Language from "./components/Language"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import MobileMenu from "./components/MobileMenu"

// <App /> component

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "pt-BR",
            status: true // navigator.languages[0]
        }
    }

    changeLanguage = event => {
        this.setState({ language: event.target.id, status: true })
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Route
                        exact
                        path="/"
                        render={() =>
                            this.state.status ? (
                                <div>
                                    <MobileMenu
                                        language={this.state.language}
                                    />
                                    <Home language={this.state.language} />
                                    <div className="mobile-footer" />
                                </div>
                            ) : (
                                <Language
                                    changeLanguage={this.changeLanguage}
                                    page="/"
                                />
                            )
                        }
                    />
                    <Route
                        path="/about"
                        render={() =>
                            this.state.status ? (
                                <div>
                                    <MobileMenu
                                        language={this.state.language}
                                    />
                                    <About language={this.state.language} />
                                    <div className="mobile-footer" />
                                </div>
                            ) : (
                                <Language
                                    changeLanguage={this.changeLanguage}
                                    page="/about"
                                />
                            )
                        }
                    />
                    <Route
                        path="/projects"
                        render={() =>
                            this.state.status ? (
                                <div>
                                    <MobileMenu
                                        language={this.state.language}
                                    />
                                    <Projects language={this.state.language} />
                                    <div className="mobile-footer" />
                                </div>
                            ) : (
                                <Language
                                    changeLanguage={this.changeLanguage}
                                    page="/projects"
                                />
                            )
                        }
                    />
                    <Route
                        path="/contact"
                        render={() =>
                            this.state.status ? (
                                <div>
                                    <MobileMenu
                                        language={this.state.language}
                                    />
                                    <Contact language={this.state.language} />
                                    <div className="mobile-footer" />
                                </div>
                            ) : (
                                <Language
                                    changeLanguage={this.changeLanguage}
                                    page="/contact"
                                />
                            )
                        }
                    />
                </div>
            </BrowserRouter>
        )
        /**/
    }
}

export default App
