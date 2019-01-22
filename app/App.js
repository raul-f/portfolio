import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Language from "./components/Language"
import Home from "./components/Home"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"

// <App /> component

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: "pt-BR" // navigator.languages[0]
        }
    }

    changeLanguage = event => {
        this.setState({ language: event.target.id })
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Language changeLanguage={this.changeLanguage} />
                        )}
                    />
                    <Route
                        path="/home"
                        component={() => (
                            <Home language={this.state.language} />
                        )}
                    />
                    <Route
                        path="/about"
                        render={() => <About language={this.state.language} />}
                    />
                    <Route
                        path="/projects"
                        render={() => (
                            <Projects language={this.state.language} />
                        )}
                    />
                    <Route
                        path="/contact"
                        render={() => (
                            <Contact language={this.state.language} />
                        )}
                    />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
