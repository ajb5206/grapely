import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';


function Wine(props) {
	return (
		<div>
			<div onClick = {() => props.whenWineClicked(props.id)}>
				<Card>
					<Card.Title>{props.name}</Card.Title>
					<Card.Body>
						<p>{props.region}</p>
						<p>{props.varietals}</p>
						<p>{props.notes}</p>
					</Card.Body>
				</Card>
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
