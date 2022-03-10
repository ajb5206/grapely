import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function NewWineForm(props){

	const firestore = useFirestore();

	function addWineToFirestore(event) {
		event.preventDefault();
		props.onNewWineCreation();

		return firestore.collection('wine').add(
      {
        name: event.target.name.value,
        region: event.target.region.value,
				varietals: event.target.varietals.value, 
        notes: event.target.notes.value,
      }
    );
	}

	return (
		<React.Fragment>
			<ReusableForm	
				formSubmissionHandler={addWineToFirestore}
				buttonText="Submit!" />
		</React.Fragment>
	);
}

NewWineForm.propTypes = {
	onNewWineCreation: PropTypes.func
};

export default NewWineForm;