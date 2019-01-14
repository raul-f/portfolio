import React from 'react'

import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

class App extends React.Component {
	render() {
		return (
		<div id="app">
			<Home />
		</div>
		)
	}
}

export default App