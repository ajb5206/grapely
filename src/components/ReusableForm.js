import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
	return (
		<React.Fragment>
			<form onSubmit={props.formSubmissionHandler}>
			<input
				class="form control"
					type="text"
					name="name"
					placeholder="Wine Name" />
				<input
					class="form control"
					type="text"
					name='region'
					placeholder='Wine Region' />
				<input
					class="form control"
					type="text"
					name='varietals'
					placeholder='Varietals' />
				<textarea
					class="form control"
					name='notes'
					placeholder='Enter your tasting notes.' />
				<button type='submit'>{props.buttonText}</button>
			</form>
		</React.Fragment>
	);
}

ReusableForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
}

export default ReusableForm;