import React from 'react'
import Typed from 'typed.js'

class TypedIntro extends React.Component {
	componentDidMount() {
		const greetingOptions = {
			strings: ["<h1 class='intro-text'>Hello.</h1>"],
			typeSpeed: 60
		}
		const descritionOptions = {
			strings: ["<h1 class='intro-text'>My name is <span class='white-text'>Raul Figueiredo</span>, and I am a <span class='white-text'>web developer</span>.</h1>"],
			typeSpeed: 50,
			startDelay: 1200
		}
		this.typedGreeting = new Typed(this.greeting, greetingOptions);
		this.typedDescrition = new Typed(this.descrition, descritionOptions);
	}
	render() {
		return(
			<div className='intro-box'>
				<span id='hello' ref={(element) => { this.greeting = element; }}/>
				<span id='raul-f' ref={(element) => { this.descrition = element; }}/>
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