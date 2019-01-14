import React from 'react'

import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 'about'
		}
	}
	render() {
		return (
		<div id="app">
			{this.state.current === 'home' ? <Home /> : this.state.current === 'about' ? <About /> : this.state.current === 'projects' ? <Projects /> : <Contact />}
		</div>
		)
	}
}

export default App