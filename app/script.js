import React from 'react';
import ReactDOM from 'react-dom';
require('./style.css');

class App extends React.Component {
	render() {
		return(
		<div>
			Hello, VVorld!
		</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));