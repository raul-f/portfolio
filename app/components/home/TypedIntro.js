import React from 'react'
import Typed from 'typed.js'

class TypedIntro extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        this.props.language === 'pt-BR'
          ? "<h1 class='intro-text'>Ol&aacute;.<br> ^500 Meu nome é</span> <span class='mobile-hand'><span class='white-text'>Raul Figueiredo</span>,</span> ^350 e eu sou um <span class='mobile-hand'><span class='white-text'>web developer</span>.</span></h1>"
          : "<h1 class='intro-text'>Hello.<br> ^500 My name is <span class='mobile-hand'><span class='white-text'>Raul Figueiredo</span>,</span> ^350 and I am a <span class='mobile-hand'><span class='white-text'>web developer</span>.</span></h1>",
      ],
      typeSpeed: 50,
      showCursor: false,
    }
    this.typed = new Typed(this.intro, options)
  }
  render() {
    return (
      <div className="intro-box">
        <span
          id="hello"
          ref={element => {
            this.intro = element
          }}
        />
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
