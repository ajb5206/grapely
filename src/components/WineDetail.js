import React from "react";
import PropTypes from "prop-types";


function WineDetail(props){
  const { wine, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Wine Details</h1>
      <h3>{wine.name}</h3>
      <p>{wine.region}</p>
			<p>{wine.varietals}</p>
			<p>{wine.notes}</p>
			<button onClick= {props.onClickingEdit }>Update Wine</button>
			<button onClick={() => onClickingDelete(wine.id) }>Close Wine</button>
      <hr/>
    </React.Fragment>
  );
}

WineDetail.propTypes = {
	wine: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func
};

export default WineDetail;