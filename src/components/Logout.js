import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Logout() {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	const history = useHistory;

	async function handleLogout() {
		setError('')

		try {
			await logout()
			history.push("/login")
		} catch {
			setError("Failed to log out")
		}
	}

	return (
		<div>
			{error && <Alert variant="danger">{error}</Alert>}
			<Button variant="link" onClick={handleLogout}></Button>
		</div>
	)
}

export default Logout;
