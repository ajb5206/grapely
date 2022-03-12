import React from 'react';
import PropTypes from 'prop-types';


function Wine(props) {
	return (
		<div>
			<div onClick = {() => props.whenWineClicked(props.id)}>
				<h3>{props.name}</h3>	
				<p>{props.region}</p>
				<p>{props.varietals}</p>
				<p>{props.notes}</p>
				<hr />
			</div>
		</div>
	);
}

Wine.propTypes = {
	name: PropTypes.string,
	region: PropTypes.string,
	varietals: PropTypes.string,
	notes: PropTypes.string
}

export default Wine;
