import React from 'react'
import Typed from 'typed.js'

class TypedIntro extends React.Component {
	componentDidMount() {
		const options = {
			strings: ["<h1 class='intro-text'>Hello.</h1><br><h1 class='intro-text'> ^500 My name is <span class='white-text'>Raul Figueiredo</span>, and I am a <span class='white-text'>web developer</span>.</h1>"],
			typeSpeed: 50,
			showCursor: false
		}
		this.typed = new Typed(this.intro, options);
	}
	render() {
		return(
			<div className='intro-box'>
				<span id='hello' ref={(element) => { this.intro = element; }}/>
			</div>
		)
	}
}

/*
const Intro = () => {
	return(
		<div id='intro-box'>
			<h1 className='intro-text'>Hello.</h1>
			<h1 className='intro-text'>My name is <span className='white-text'>Raul Figueiredo</span>, and I am a <span className='white-text'>web developer</span>.</h1>
		</div>
	)
}
*/

export default TypedIntro