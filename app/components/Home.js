import React from 'react'

import Navbar from './home/Navbar'
import TypedIntro from './home/TypedIntro'
import LinkBox from './home/LinkBox'

function Home() {
	return (
		<div id="home">
			<div className='bg-filter'>
				<Navbar />
				<TypedIntro />
				<LinkBox />
			</div>
		</div>
	)
}

export default Home