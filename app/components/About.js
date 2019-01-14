import React from 'react'

import Navbar from './about/Navbar'
import AboutEmpty from './about/AboutEmpty'
import AboutLeft from './about/AboutLeft'
import AboutRight from './about/AboutRight'
import LinkBox from './about/LinkBox'

const About = () => {
	return(
		<div id='about'>
			<Navbar />
			<AboutEmpty />
			<AboutLeft />
			<AboutRight />
			<LinkBox />
		</div>
	)
}

export default About