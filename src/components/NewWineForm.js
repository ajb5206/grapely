import React from 'react';
import ReusableForm from './ReusableForm';

function NewWineForm(props){


	return (
		<React.Fragment>
			<ReusableForm	
				formSubmissionHandler={addWine_______}
				buttonText="Submit!" />
		</React.Fragment>
	);
}

export default NewWineForm;