import React from 'react';


function Wine(props) {
	return (
		<div>
			<div onCLick = {() => props.whenWineClicked(props.id)}>
				<h3>{props.name}</h3>	
				<p>{props.region}</p>
				<p>{props.varietals}</p>
				{/* <p>{props.notes}</p> */}
				<hr />
			</div>
		</div>
	);
}

export default Wine;
