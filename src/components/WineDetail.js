import React from "react";
import PropTypes from "prop-types";
import { Card } from 'react-bootstrap';


function WineDetail(props){
  const { wine, onClickingDelete } = props;

  return (
    <React.Fragment>
			<Card>
			<Card.Title>Wine Details</Card.Title>
			<Card.Body>
			<h5>{wine.name}</h5>
      <p>Region: {wine.region}</p>
			<p>Varietals: {wine.varietals}</p>
			<p>Notes: {wine.notes}</p>
			</Card.Body>
			</Card>
			<button onClick= {props.onClickingEdit }>Update Wine</button>
			<button onClick={() => onClickingDelete(wine.id) }>Delete Wine</button>
    </React.Fragment>
  );
}

WineDetail.propTypes = {
	wine: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func
};

export default WineDetail;