import React from 'react'
import Wine from './Wine';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function WineList(props) {

		useFirestoreConnect([
			{ collection: 'wines' }
		]);

		const wines = useSelector(state => state.firestore.ordered.wines);

		if (isLoaded(wines)) {
			return (
				<React.Fragment>
					<hr/>
					{wines.map((wine) => {
						return <Wine 
						whenWineClicked = { props.onWineSelection }	
						name={wine.name}
						region={wine.region}
						varietals={wine.varietals}
						notes={wine.notes}
						id={wine.id}
						key={wine.id}/>
					})}
				</React.Fragment>
			);
		} else {

	return (
		<React.Fragment>
			<h3>Loading ....</h3>
		</React.Fragment>
		);
	}
}

WineList.propTypes = {
	onWineSelection: PropTypes.func
};

export default WineList;
