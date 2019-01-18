import React from 'react'

import Navbar from './home/Navbar'
import TypedIntro from './home/TypedIntro'
import LinkBox from './home/LinkBox'

function Home() {
	return (
		<div id="home">
			<div className='bg-filter'></div>
			<Navbar />
			<TypedIntro />
			<LinkBox />
		</div>
	)
}

export default Home