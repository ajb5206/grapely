import React from 'react';
import ReusableForm from './ReusableForm';


function EditWineForm(props) {

	function handleEditWineFormSubmission(event) {
		event.preventDefault();
		props.onEditWine();
		const propertiesToUpdate = {
			name: event.target.name.value,
			region: event.target.region.value,
			varietals: event.target.varietals.value,
			notes: event.target.notes.value
		}
	}

	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={handleEditWineFormSubmission}
				butonText="Update Wine" />
		</React.Fragment>
	);
}

export default EditWineForm;