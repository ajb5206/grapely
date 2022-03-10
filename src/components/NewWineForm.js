import React from 'react';
import ReusableForm from './ReusableForm';
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
        timeOpen: firestore.FieldValue.serverTimestamp()
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

export default NewWineForm;