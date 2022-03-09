import React from 'react';
import WineList from './WineList';


class WineControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedWine: null,
			editing: false
		};
	}


	render(){
		let currentlyVisibleState = null;
		let buttonText = null;

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}

export default WineControl;