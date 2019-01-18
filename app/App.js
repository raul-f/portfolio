import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./components/Home.js"
import Navbar from "./components/home/Navbar"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
