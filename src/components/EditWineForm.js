import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';


function EditWineForm(props) {
	const firestore = useFirestore();
	const { wine } = props;

	function handleEditWineFormSubmission(event) {
		event.preventDefault();
		props.onEditWine();
		const propertiesToUpdate = {
			name: event.target.name.value,
			region: event.target.region.value,
			varietals: event.target.varietals.value,
			notes: event.target.notes.value
		}
		return firestore.update({collection: 'wines', doc: wine.id}, propertiesToUpdate)
	}

	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={handleEditWineFormSubmission}
				butonText="Update Wine" />
		</React.Fragment>
	);
}

EditWineForm.propTypes = {
	wine: PropTypes.object,
	onEditWine: PropTypes.func
};

export default EditWineForm;