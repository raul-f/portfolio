import React from 'react'

import Navbar from './about/Navbar'
import AboutLeft from './about/AboutLeft'
import AboutRight from './about/AboutRight'
import Watermark from './about/Watermark'
import LinkBox from './about/LinkBox'

const About = () => {
	return(
		<div id='about'>
			<Navbar />
			<AboutLeft />
			<AboutRight />
			<Watermark />
			<LinkBox />
		</div>
	)
}

export default About