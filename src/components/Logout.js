import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Logout() {
	const [error, setError] = useState('')
	const { currentUser, logout } = useAuth();

	async function handleLogout() {
		setError('')

		try {
			await logout()
		}
	}

	return (
		<div>
			<Button variant="link" onClick={handleLogout}></Button>
		</div>
	)
}

export default Logout;
