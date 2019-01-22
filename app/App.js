import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Language from "./components/Language"
import HomeEn from "./components/en/Home.js"
import About from "./components/en/About.js"
import Projects from "./components/en/Projects.js"
import Contact from "./components/en/Contact.js"
import HomePt from "./components/pt/Home"
import Sobre from "./components/pt/Sobre"
import Projetos from "./components/pt/Projetos"
import Contato from "./components/pt/Contato"

// <App /> component

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Route exact path="/" component={Language} />
                    <Route path="/en/home" component={HomeEn} />
                    <Route path="/en/about" component={About} />
                    <Route path="/en/projects" component={Projects} />
                    <Route path="/en/contact" component={Contact} />
                    <Route path="/pt/home" component={HomePt} />
                    <Route path="/pt/about" component={Sobre} />
                    <Route path="/pt/projects" component={Projetos} />
                    <Route path="/pt/contact" component={Contato} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
