import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Grape(props) {
	return (
		<div>
			<Card>
			<Card.Img src="{props.img}"></Card.Img>
				<Card.Title>
					{props.name}
				</Card.Title>
				<Card.Body>
					{props.region}
					{props.varietals}
					{props.tastingNotes}
				</Card.Body>
			</Card>
			<Card>
				<Card.Img src="{props.img}"></Card.Img>
				<Card.Title>
					{props.name}
				</Card.Title>
				<Card.Subtitle>Suggested for you</Card.Subtitle>
				<Card.Body>
					{props.region}
					{props.varietals}
					{props.tastingNotes}
				</Card.Body>
			</Card>
		</div>
	)
}
