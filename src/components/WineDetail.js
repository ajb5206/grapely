import React from "react";


function WineDetail(props){
  const { wine } = props;

  return (
    <React.Fragment>
      <h1>Wine Details</h1>
      <h3>{wine.name}</h3>
      <p>{wine.region}</p>
			<p>{wine.varietals}</p>
			<p>{wine.notes}</p>
      <hr/>
    </React.Fragment>
  );
}

export default WineDetail;