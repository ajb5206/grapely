import NewWineForm from './NewWineForm';
import EditWineForm from './EditWineForm';
import React from 'react';
import WineList from './WineList';
import WineDetail from './WineDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

class WineControl extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			selectedWine: null,
			editing: false
		};
	}

	handleClick = () => {
		if (this.state.selectedWine != null) {
			this.setState({
				selectedWine: null,
				editing: false
			});
		} else {
			const { dispatch } = this.props;
			const action = a.toggleForm();
		dispatch(action);
		}
	}

	handleAddingNewWineToList = () => {
		const { dispatch } = this.props;
		const action = a.toggleForm();
		dispatch(action);
	}

	handleChangingSelectedWine = (id) => {
		this.props.firestore.get({collection: 'wines', doc: id}).then((wine) => {
			const firestoreWine = {
				name: wine.get("name"),
				region: wine.get("region"),
				varietals: wine.get("varietals"),
				notes: wine.get("notes"),
				id: wine.id
			}
			this.setState({selectedWine: firestoreWine });
		});
	}

	handleDeletingWine = (id) => {
		this.props.firestore.delete({collection: 'wines', doc: id});
		this.setState({selectedWine: null})
	}

	handleEditClick = () => {
		this.setState({editing: true});
	}

	handleEditingWineInList = () => {
		this.setState({
			editing: false,
			selectedWine: null
		});
	}

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
				<Link to="/logout">Log Out</Link>
			</React.Fragment>
		);
	}
}

WineControl.propTypes = {
	formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
	return {
		formVisibleOnPage: state.formVisibleOnPage
	}
}

WineControl = connect(mapStateToProps)(WineControl);

export default withFirestore(WineControl);