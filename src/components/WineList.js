import React from 'react'
import Wine from './Wine';

function WineList(props) {


	return (
		<div>
			<hr />
			{props.wineList.map((wine) =>
			<Wine 
				whenWineClicked = {props.onWineSelection}
				name={wine.name}
				region={wine.region}
				varietals={wine.varietals}
				notes={wine.notes} 
				id={wine.id} />

				)}
		</div>
	);
}

export default WineList;
