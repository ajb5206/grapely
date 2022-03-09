import React from 'react';


function Wine(props) {
	return (
		<div>
			<div onCLick = {() => props.whenWineClicked(props.id)}>
				<h3>{props.wineName}</h3>	
				<p>{props.wineRegion}</p>
				<p>{props.varietals}</p>
				<hr />
			</div>
		</div>
	);
}

export default Wine;
