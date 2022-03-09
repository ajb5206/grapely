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

	// handleClick = () => {
	// 	if (this.state.selectedWine)
	// }


	render(){
		let currentlyVisibleState = null;
		let buttonText = null;

		if (this.state.editing) {
			currentlyVisibleState = <EditWineForm wine = {this.state.selectedWine} onEditWine = {this.handleEditingWineInList} />
			buttonText = "Return to Wine List";
		}
		else if (this.state.selectedWine != null){
			currentlyVisibleState = 
			<WineDetail
				wine={this.state.selectedWine}
				onClickingDelete = {this.handleDeletingWine}
				onClickingEdit = {this.handleEditClick} />;
			buttonText = "Return to Wine List";
		}
		else if (this.props.formVisibleOnPage) {
			currentlyVisibleState = <NewWineForm onNewWineCreation={this.handleAddingNewWineToList} />;
			buttonText = "Return to Wine List";
		}
		else {
			currentlyVisibleState = <WineList wineList onWineSelection={this.handleChangingSelectedWine} />;
			buttonText = "Add Wine";
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}

export default WineControl;